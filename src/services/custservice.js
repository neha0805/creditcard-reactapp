let url = "http://localhost:8080/customers"

// export function getAllCustomers()
// {
//     fetch(url)
//     .then(res => res.json())
//     .then(customers => {
//         console.log(customers)
//         return customers;
//     })
// }

export async function getAllCustomers()
{
    let response = await fetch(url)
    let customers = await response.json()
    return customers
}