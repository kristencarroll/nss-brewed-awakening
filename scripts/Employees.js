import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()


const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            
            fulfilledOrders ++

        
        }  
        
    }
    return fulfilledOrders
    
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
             for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    
                    const orderAmount = employeeOrders(employee)
                    
                    window.alert(`${employee.name} sold ${orderAmount} products.`)
                }
            }
        }
    }
)

let employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

