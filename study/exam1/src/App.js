import React, { useEffect, useMemo, useState } from "react";

function App() {
  // step 1
  // const [input, setInput] = useState("");
  // const [isView, setIsView] = useState(false);
  // const onChange = (e) => {
  //   setInput(e.target.value);
  //   setIsView(false);
  // };
  // const onClick = () => {
  //   setIsView(true);
  // };
  // const reset = () => {
  //   setInput("");
  //   setIsView(false);
  // };
  // return (
  //   <div>
  //     <input onChange={onChange} value={input} />
  //     <button onClick={onClick}>구매</button>
  //     <button onClick={reset}>초기화</button>
  //     {isView && (
  //       <div>
  //         <span>구입하신 물건은 {input}입니다.</span>
  //       </div>
  //     )}
  //   </div>
  // );
  // step 2
  // const defaultValue = {
  //   item: "사과",
  //   count: "",
  // };
  // const [input, setInput] = useState(defaultValue);
  // const { item, count } = input;
  // const [isView, setIsView] = useState(false);
  // const price = useMemo(() => {
  //   switch (item) {
  //     case "사과":
  //       return 5000 * count;
  //     case "딸기":
  //       return 8000 * count;
  //     case "배":
  //       return 10000 * count;
  //     default:
  //       return 0;
  //   }
  // }, [item, count]);
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({
  //     ...input,
  //     [name]: value,
  //   });
  //   setIsView(false);
  // };
  // const onClick = () => {
  //   setIsView(true);
  // };
  // const reset = () => {
  //   setInput(defaultValue);
  //   setIsView(false);
  // };
  // return (
  //   <div>
  //     <select onChange={onChange} name="item" value={item}>
  //       <option value="사과">사과</option>
  //       <option value="딸기">딸기</option>
  //       <option value="배">배</option>
  //     </select>
  //     <input onChange={onChange} name="count" value={count} />
  //     <button onClick={onClick}>구매</button>
  //     <button onClick={reset}>초기화</button>
  //     {isView && (
  //       <>
  //         <div>
  //           <span>구입하신 물건은 {item}입니다.</span>
  //         </div>
  //         <div>
  //           <span>
  //             {item}의 갯수는 {count}입니다.
  //           </span>
  //         </div>
  //         <div>
  //           <span>
  //             {item}의 전체 가격은 {price}입니다.
  //           </span>
  //         </div>
  //       </>
  //     )}
  //   </div>
  // );
  // step 3 장바구니
  // const defaultValue = {
  //   item: "사과",
  //   count: "",
  // };
  // const [total, setTotal] = useState(0);
  // const [input, setInput] = useState(defaultValue);
  // const { item, count } = input;
  // const [isView, setIsView] = useState(false);
  // const [list, setList] = useState([]);
  // const price = useMemo(() => {
  //   switch (item) {
  //     case "사과":
  //       return 5000 * count;
  //     case "딸기":
  //       return 8000 * count;
  //     case "배":
  //       return 10000 * count;
  //     default:
  //       return 0;
  //   }
  // }, [item, count]);
  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({
  //     ...input,
  //     [name]: value,
  //   });
  //   // setIsView(false);
  // };
  // const onClick = () => {
  //   setIsView(true);
  //   const add = {
  //     item,
  //     count,
  //     price,
  //   };
  //   setList([...list, add]);
  // };
  // const reset = () => {
  //   setInput(defaultValue);
  //   setList([]);
  //   setIsView(false);
  // };
  // const onTotal = () => {
  //   let totalPrice = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     totalPrice += list[i].price;
  //   }
  //   setTotal(totalPrice);
  // };
  // return (
  //   <div>
  //     <select onChange={onChange} name="item" value={item}>
  //       <option value="사과">사과</option>
  //       <option value="딸기">딸기</option>
  //       <option value="배">배</option>
  //     </select>
  //     <input onChange={onChange} name="count" value={count} />
  //     <button onClick={onClick}>등록</button>
  //     <button onClick={reset}>초기화</button>
  //     {isView &&
  //       list.map((listItem, index) => (
  //         <div key={index}>
  //           <span>{listItem.item}</span>
  //           <span> </span>
  //           <span>{listItem.count}개</span>
  //           <span> </span>
  //           <span>{listItem.price}</span>
  //         </div>
  //       ))}
  //     <br />
  //     <button onClick={onTotal}>구매</button>
  //     <h1>총 {total}입니다.</h1>
  //   </div>
  // );

  // 계산 step 1
  const defaultValue = {
    number1: "",
    calcul: "+",
    number2: "",
  };

  const [inputs, setInputs] = useState(defaultValue);
  const { number1, calcul, number2 } = inputs;

  const [result, setResult] = useState(0);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCal = (event, text) => {
    console.log(text);

    // 거르기

    if (calcul === "/" && number2.charAt(0) === "0") {
      alert("모든 수는 0으로 나눌 수 없습니다");
      return;
    }
    // 정상

    switch (calcul) {
      case "+":
        setResult(parseInt(number1) + parseInt(number2));
        break;
      case "-":
        setResult(parseInt(number1) - parseInt(number2));
        break;
      case "x":
        setResult(parseInt(number1) * parseInt(number2));
        break;
      case "/":
        setResult(parseInt(number1) / parseInt(number2));
        break;
      default:
        break;
    }
  };

  const onTest = () => {
    const func = (num) => {
      const a = (num) => num * num;
      const b = (num) => num + num;

      return (v) => a(num) + b(num) + v;
    };

    console.log(func(2)(5));
  };

  return (
    <div>
      <input name="number1" onChange={onChange} value={number1} />
      <select name="calcul" onChange={onChange} value={calcul}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">x</option>
        <option value="/">/</option>
      </select>
      <input name="number2" onChange={onChange} value={number2} />
      <button onClick={onCal}>계산</button>
      <button onClick={onTest}>테스트</button>
      <h1>결과 : {result}</h1>
    </div>
  );
}

export default App;
