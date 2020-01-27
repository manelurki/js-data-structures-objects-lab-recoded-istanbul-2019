const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {

  let a=Object.assign({}, driver, { [key]: value });
  return a;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {

  const obj = { foo: "bar" };
 
const newObj = Object.assign({}, obj);
 
newObj;
// => { foo: "bar" }
 
delete newObj['foo'];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}