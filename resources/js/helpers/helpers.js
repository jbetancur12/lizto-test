export const status = {
    IN_PROGRESS: 'In Progress',
    RECEIVED: 'Received'
}

// Create our number formatter.
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
