export function calculateLateFee(daysLate: number): number {
    return daysLate * .25;
}

export function MaxBooksAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}

function privateFunc(): void {
    console.log('This is private...');
}

export function purge<T>(inventory: Array<T>): Array<T> {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}