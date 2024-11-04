const dataAdditionFunction = (newData) => {

    const filePath = path.join(__dirname, "../marketPlacePage/marketplaceData.json"); // Path to your JSON file

    // Read the existing data
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }

        // Parse existing data and append new data
        let jsonData = JSON.parse(data);
        jsonData.push(newData);

        // Write updated data back to the file
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Error writing file" });
            }
            res.status(200).json({ message: "Data appended successfully!" });
        });
    });
}

export default dataAdditionFunction;