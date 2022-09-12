export const status = {
    IN_PROGRESS: 'In Progress',
    RECEIVED: 'Received',
    CANCELLED: 'Cancelled',
}

// Create our number formatter.
export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
