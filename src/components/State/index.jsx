import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const State = () => {
  //   const [value, setValue] = useState(0);
  //   const [isActive, setActive] = useState(false);
  //   const [person, setPerson] = useState({
  //     name: faker.person.firstName(),
  //     bio: faker.person.bio(),
  //     job: faker.person.jobTitle(),
  //     numberInfo: {
  //       name: faker.phone.number(),
  //       number: faker.phone.imei()
  //     }
  //   });

  const [data, setData] = useState([
    {
      id: 1,
      name: "pouriya",
      family: "babaali"
    },
    {
      id: 2,
      name: "mohsen",
      family: "babaali"
    },
    {
      id: 3,
      name: "mohsen",
      family: "babaali"
    },
    {
      id: 4,
      name: "mohsen",
      family: "babaali"
    },
    {
      id: 5,
      name: "mohsen",
      family: "babaali"
    },
    {
      id: 6,
      name: "mohsen",
      family: "babaali"
    }
  ]);

  //   const [pouriya, setPouriya] = useState(0);
  //   const [fariborz, setFariborz] = useState(0);
  // number   const handleIncrement = () => {
  // setValue(value + 1);
  // setValue(value + 1);
  // setValue(value + 1);
  // setValue(value + 1);
  // setValue(value + 1);
  // console.log(value);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // setValue((prev) => prev + 1);
  // console.log(value);
  /// ------------------------------------
  /// ------------Update State Direct--------------
  /// ------------------------------------
  // value += 1;
  // value += 1;
  // value += 1;
  // value += 1;
  // value += 1;
  // value += 1;
  // console.log(value);
  //   };

  // number
  //   const handleDecrement = () => {
  //     // setValue(value - 1);
  //     setValue((prev) => prev - 1);
  //   };

  // boolean
  //   const handleToggle = () => {
  //     setActive((prev) => !prev);
  //   };

  // object
  //   const handleChangePerson = () => {
  // setPerson({
  //   ...person,
  //   name: "pouriya",
  //   job: "programmer"
  // });
  // setPerson((prev) => ({
  //   ...prev,
  //   name: "pouriya"
  // }));
  // const copy = { ...person };
  // copy.numberInfo.number = 123456;
  // console.log(copy);
  // console.log(person, "1");
  // setPerson(copy);
  // setPerson({
  //   ...person,
  //   numberInfo: {
  //     number: 12345678
  //   }
  // });
  // deep copy
  // const deepCopy = JSON.parse(JSON.stringify(person));
  // deepCopy.numberInfo.number = 123456;
  // setPerson(deepCopy);
  // const x = {
  //   name: "ali",
  //   family: "babaali",
  //   job: "programmer"
  // };
  // // marge assaing {} vs {}
  // setPerson({
  //   ...person,
  //   ...x,
  // });
  //   };

  //   console.log(person, "2");

  //array
  //   const handleDelete = (id) => {
  //     const newDate = data.filter((x) => x.id !== id);
  //     setData(newDate);
  //   };

  //   const handleAdd = () => {
  //     setData([
  //       ...data,
  //       {
  //         id: 7,
  //         name: "ali",
  //         value: "babaali"
  //       }
  //     ]);
  //   };

  return (
    <div>
      {/* number string <div>{value}</div>
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={handleDecrement}>-</button>
       */}

      {/*  boolean <div>{isActive ? "فعال" : "غیرفعال"}</div>
      <button onClick={handleToggle}>
        {isActive ? "غیرفعال کردن" : "فعال کردن"}
      </button> */}

      {/*  object
      <ul>
        <li>{person && person.name}</li>
        <li>{person?.bio}</li>
        <li>{person?.job}</li>
        <li>{person?.numberInfo?.name}</li>
     <li>{person && person.numberInfo && person.numberInfo.number}</li> 
        <li>{person?.numberInfo?.number}</li>
      </ul>

      <button onClick={handleChangePerson}>عوض شو</button>
      */}

      {/* array */}
      {/* Render List */}
      {/* <ul>
        {data?.map((item, index) => (
          <li key={index} onClick={() => handleDelete(item.id)}>
            {item.id}
          </li>
        ))}
        <button onClick={handleAdd}>+</button>
      </ul> */}
    </div>
  );
};

export default State;
