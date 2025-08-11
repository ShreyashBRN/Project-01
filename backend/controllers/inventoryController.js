let inventory = [
    { id: '1', name: 'Laptop', quantity: 14, price: 653455555555 },
    { id: '2', name: 'Ledwdw', quantity: 11, price: 265255555 },
    { id: '3', name: 'tgttgtg', quantity: 6, price: 6533556 }
];



exports.getInventoryItems = (req, res) => {
    res.status(200).json(inventory);
};

exports.getInventoryItemById = (req, res) => {
    const id = req.params.id;
    const item = inventory.find(inv => inv.id === id);

    if (!item) {
        return res.status(404).json({ message: "Inventory item not found" });
    }

    res.status(200).json(item);
};

exports.createInventoryItem = (req, res) => {
    const newItem = req.body;
    inventory.push(newItem);
    res.status(201).json({ message: "Inventory item created", item: newItem });
};

exports.updateInventoryItem = (req, res) => {
    const id = req.params.id;
    const index = inventory.findIndex(inv => inv.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Inventory item not found" });
    }

    inventory[index] = { ...inventory[index], ...req.body };
    res.status(200).json({ message: "Inventory item updated", item: inventory[index] });
};

exports.deleteInventoryItem = (req, res) => {
    const id = req.params.id;
    const index = inventory.findIndex(inv => inv.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Inventory item not found" });
    }

    inventory.splice(index, 1);
    res.status(200).json({ message: "Inventory item deleted", inventory });
};
