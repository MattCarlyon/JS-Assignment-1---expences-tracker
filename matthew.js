
// one account object
const account = {
  incomes: [],
  expenses: [],
  addIncome: function () {
    const income = parseFloat(prompt("Insert Income:"));
    // this is where something can go wrong
    this.incomes.push(income);
    menu();
  },
  addExpence: function () {
    const expenceType = parseFloat(prompt("Insert Expence Type:"));
    const expence = parseFloat(prompt("Insert Expence:"));

    this.expenses.push({ expenceType, expence });
    menu();
  },
  listExpences: function () {
    // when looping through the array make sure
    // that the alert is NOT in the loop
    // so make sure you have an empty variable that you can save your list (created in the loop)
    // use that variale in the alert but make sure you call for the alert outside of the loop

    alert(expenses.join("\n"));
    menu();
  },
  getSummary: function () {
    let totalExpence = 0;

    this.expenses.forEach((e) => {
      totalExpence = totalExpence + e.expence;
    });

    // test if this work otherwise do the same as with expenses
    const netincome = this.incomes - totalExpence;

    alert(
      "Income: " +
        incomes +
        "\n" +
        "Total Expences: " +
        totalExpence +
        "\n" +
        "Remaining: " +
        netincome
    );

    menu();
  },
};

function menu() {
  const choice = parseFloat(
    prompt(
      "Hi " +
        firstName +
        "\n" +
        "\n" +
        "Select a choice:" +
        "\n" +
        "1.) Add income" +
        "\n" +
        "2.) Add expence" +
        "\n" +
        "3.) List all expences" +
        "\n" +
        "4.) Get summary" +
        "\n"
    )
  );

  if (choice === 1) {
    account.addIncome();
  } else if (choice === 2) {
    account.addExpence();
  } else if (choice === 3) {
    account.listExpences();
  } else if (choice === 4) {
    account.getSummary();
  } else {
    //account.getError();
    alert("Not a valid input!");
  }
}

menu();
