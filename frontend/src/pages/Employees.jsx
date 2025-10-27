import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Employees() {
  // Dummy data (frontend-only)
  const [employees, setEmployees] = useState([
    { uid: 1, employeeId: "E-1001", name: "John Doe", email: "john@example.com", role: "HR Manager", department: "HR" },
    { uid: 2, employeeId: "E-1002", name: "Sarah Smith", email: "sarah@example.com", role: "Sales Executive", department: "Sales" },
  ]);

  // Dialog state
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Form state
  const initialForm = { uid: null, employeeId: "", name: "", email: "", role: "", department: "" };
  const [form, setForm] = useState(initialForm);

  // Simple client-side validation state
  const [errors, setErrors] = useState({});

  // Helpers
  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setIsEdit(false);
  };

  const handleOpenAdd = () => {
    resetForm();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const validate = () => {
    const e = {};
    if (!form.employeeId?.trim()) e.employeeId = "Employee ID is required";
    if (!form.name?.trim()) e.name = "Name is required";
    if (!form.email?.trim()) e.email = "Email is required";
    if (!form.role?.trim()) e.role = "Role is required";
    if (!form.department?.trim()) e.department = "Department is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Add employee (frontend-only)
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    if (isEdit) {
      // Update existing in state
      setEmployees((prev) =>
        prev.map((emp) => (emp.uid === form.uid ? { ...emp, ...form } : emp))
      );
    } else {
      // Create new item
      const newEmployee = {
        ...form,
        uid: Date.now(), // temporary unique id for frontend-only data
      };
      setEmployees((prev) => [newEmployee, ...prev]);
    }

    handleClose();
  };

  // Delete employee (frontend-only)
  const handleDelete = (uid) => {
    const ok = window.confirm("Delete this employee? This action cannot be undone.");
    if (!ok) return;
    setEmployees((prev) => prev.filter((emp) => emp.uid !== uid));
  };

  // Edit employee — open dialog prefilled
  const handleEdit = (emp) => {
    setForm(emp);
    setIsEdit(true);
    setOpen(true);
  };

  return (
    <div className="p-6 ">
      <Paper elevation={2} className="p-6 ">
        <Stack direction="row" justifyContent="space-between" alignItems="center" className="mb-4 ">
          <Typography variant="h6">Employees</Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenAdd}>
            Add Employee
          </Button>
        </Stack>

        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Department</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {employees.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No employees yet — click &ldquo;Add Employee&rdquo;
                  </TableCell>
                </TableRow>
              ) : (
                employees.map((emp) => (
                  <TableRow key={emp.uid}>
                    <TableCell>{emp.employeeId}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.role}</TableCell>
                    <TableCell>{emp.department}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" onClick={() => handleEdit(emp)} aria-label="edit">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" onClick={() => handleDelete(emp.uid)} aria-label="delete">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Box>
      </Paper>

      {/* Add / Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{isEdit ? "Edit Employee" : "Add Employee"}</DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Stack spacing={2}>
              <TextField
                label="Employee ID"
                value={form.employeeId}
                onChange={(e) => setForm((f) => ({ ...f, employeeId: e.target.value }))}
                error={!!errors.employeeId}
                helperText={errors.employeeId}
                fullWidth
              />
              <TextField
                label="Full Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
              <TextField
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
              />
              <TextField
                label="Role"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                error={!!errors.role}
                helperText={errors.role}
                fullWidth
              />
              <TextField
                label="Department"
                value={form.department}
                onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
                error={!!errors.department}
                helperText={errors.department}
                fullWidth
              />
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {isEdit ? "Save Changes" : "Add Employee"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}