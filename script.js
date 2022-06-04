// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

// function Calculator() {
// 	this.sum = function() {
// 		return this.a + this.b;
// 	}
// 	this.mul = function() {
// 		return this.a * this.b;
// 	}
// 	this.read = function() {
// 		this.a = +prompt ('a?','');
// 		this.b = +prompt ('b?','');
// 	}
// }

// let calculator = new Calculator();
// calculator.read();

// alert ('Sum=' + calculator.sum());
// alert ('Mul=' + calculator.mul());


/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, 
// что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// function Accumulator(startingValue) {
// 	this.value = startingValue;
// 	this.read = function() {
// 		this.value += +prompt('Сколько нужно добавить?',0);
// 	}
// }

// let accumulator = new Accumulator(3);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);