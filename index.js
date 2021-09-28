// Write your solution in this file!
const employee = {
    name: `Bryan`,
    address: `Hummdinger Lane`
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function dstrctvlyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj.key = value;
    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', `Dave`);
console.log(employee);

dstrctvlyUpdateEmployeeWithKeyAndValue(employee, 'name', `Jack`);
console.log(employee);

employee.name = 'Kevin';
console.log(employee);

employee['name'] = 'Jamal';

function deleteFromEmployeeByKey(obj, key) {
    return {...obj.key};
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

destructivelyDeleteFromEmployeeByKey(employee, `name`);
console.log(employee);
