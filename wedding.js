function calculateSeating() {
    let guests = Number(prompt("How many guests?"));
    let tables = Number(prompt("How many tables?"));

    let base = Math.floor(guests / tables);
    let extra = guests % tables;

    let message = `Your ${guests} guests will be seated as follows: `;
    let parts = [];

    if (extra > 0) parts.push(`${extra} tables of ${base + 1}`);
    if (tables - extra > 0) parts.push(`${tables - extra} tables of ${base}`);

    return message + parts.join(", and ") + ".";
}
    alert(calculateSeating());