




exports.exportInventoryCSV = (req, res) => {
    const inventoryData = [
        { id: 1, name: "Product A", quantity: 50, price: 20 },
        { id: 2, name: "Product B", quantity: 30, price: 15 },
        { id: 3, name: "Product C", quantity: 10, price: 5 }
    ];

    try {
        if (inventoryData.length === 0) {
            return res.status(404).json({ message: "No inventory data found" });
        }

        // Create CSV header
        const header = "ID,Name,Quantity,Price\n";

        // Convert each object to CSV row
        const rows = inventoryData.map(item => 
            `${item.id},${item.name},${item.quantity},${item.price}`
        );

        // Join header + rows
        const csvContent = header + rows.join("\n");

        // Set headers for CSV download
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=inventory.csv");

        // Send CSV as response
        res.status(200).send(csvContent);

    } catch (error) {
        res.status(500).json({ message: "Error exporting CSV", error: error.message });
    }
}