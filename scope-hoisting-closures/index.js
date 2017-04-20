export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '');

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;

  const isValid = () => {
    return (value.length === 11)
  };


  return {

    isValid,

    toString(){
        sanitize();
        return format(value);
    }
  };
};



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}
