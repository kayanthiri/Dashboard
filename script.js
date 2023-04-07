const menuItem = document.querySelectorAll(".menu-item");

for (var i = 0; i < menuItem.length; i++) {
    menuItem[i]?.addEventListener('click', function () {
        let curActiveMenu = document.querySelector(".menu-item.active");
        if (curActiveMenu) {
            curActiveMenu.classList.remove("active");
        }
        this.classList.add('active');
        if (this.id === "home") {
            document.querySelector(".home-form form").classList.add('d-block');
        }
    })
}

const customers = document.getElementsByName("customer");
const existCustomer = document.querySelector(".existing-customer");
for (let customer of customers) {
    customer?.addEventListener('click', function () {
        if (customer.checked && customer.value === "existing customer") {
            existCustomer.classList.add("d-block");
        } else {
            existCustomer.classList.remove("d-block")
        }
    })
}
