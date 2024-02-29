function calculateCarValue(model, year) {
    let alphabetSum = 0;

    for (let i = 0; i < model.length; i++) {
        let code = model.toUpperCase().charCodeAt(i);
        if (code > 64 && code < 91) {
            alphabetSum += code - 64;
        }
    }

    return alphabetSum * 100 + year;
}

module.exports.getCarValue = (req, res) => {
    const input = req.body;
    console.log(input);

    if (!input.model || !input.year) {
        console.log("Error: missing params");
        res.status(400).send({ error: "missing params" });
        return;
    }

    if (isNaN(input.year)) {
        console.log("Error: year is not a number");
        res.status(400).send({ error: "year is not a number" });
        return;
    }

    if (!Number.isInteger(input.year)) {
        console.log("Error: year can't have decimal points");
        res.status(400).send({ error: "year can't have decimal points" });
        return;
    }

    const result = calculateCarValue(input.model, input.year);
    console.log(`Result: ${result}`);

    res.status(200).json({ carValue: result });
};
