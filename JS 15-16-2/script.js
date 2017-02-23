
function human () {
  this.name = 'Vasya',
  this.age = 30,
  this.gender = 'male',
  this.heught = 180,
  this.weight = 80
}
////////////////////////////////////////////////////////////////////////////////

function work() {
    this.workplace = 'Microsoft Corp.';
    this.salary = 10000;
  }

  function watch_serials() {
      this.study = 'University';
      this.scholarship = 1000;
    }

var worker = new work();
var student = new watch_serials();

worker.__proto__ = human;
student.__proto__ = human;

var worker1 = new work();
var student1 = new watch_serials();

/////////////////////////////////////////////////////////////////////////////////

console.log(worker);
console.log(worker1);
console.log(student);
console.log(student1);
