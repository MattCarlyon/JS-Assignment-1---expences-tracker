
// one account object
const account = {
  incomes: [],
  expences: [],
  addIncome: function () {
    const income = parseFloat(prompt("Insert Income:"));
    // this is where something can go wrong
    this.incomes.push(income);
    menu();
  },
  addExpence: function () {
    const expenceType = parseFloat(prompt("Insert Expence Type:"));
    const expence = parseFloat(prompt("Insert Expence:"));

    this.expences.push({ expenceType, expence });
    menu();
  },

  listExpences: function () {
    // when looping through the array make sure
    // that the alert is NOT in the loop
    // so make sure you have an empty variable that you can save your list (created in the loop)
    // use that variale in the alert but make sure you call for the alert outside of the loop
    //var object = {};

    //expenceType.forEach((ele, i)=>{
      //object[ele] = expence[i]
    //});

  //alert(object.join("\n"));
  
    expenceType.forEach((element, index) => {
      console.log(element, expence[index]);
      var object = {};
      object.push({ expenceType, expence });
    });
  
    alert(this.object.join("\n"));
    menu();
  },
  
  getSummary: function () {
    let totalExpence = 0;

    this.expences.forEach((e) => {
      totalExpence = totalExpence + e.expence;
    });

    let totalIncome = 0;

    this.incomes.forEach((i) => {
      totalIncome = totalIncome + i.income;
    });


    // test if this work otherwise do the same as with expenses
    const netIncome = totalIncome - totalExpence;
    // total expence bugging out calculation and returning a NaN. 

    alert(
      "Income: " +
      this.incomes +
      "\n" +
      "Total Expences: " +
      totalExpence +
      "\n" +
      "Remaining: " +
      netIncome
  );

  menu();
  },
};

const firstName = "Matthew";

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
  menu()
}

menu();
