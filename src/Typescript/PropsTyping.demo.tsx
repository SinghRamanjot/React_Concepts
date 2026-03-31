import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  email?: string;
  isActive: boolean;
}

function PropsTyping({ name, age, email, isActive }: UserCardProps) {
  const [value, setValue] = React.useState<string>("");
  const [show,setShow]=React.useState<string>("")


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setShow(value)
    setValue("")
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
      <p>{isActive ? "Active" : "InActive"}</p>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      <button onClick={handleClick}>Show Text</button>
      <p>{show}</p>
    </div>
  );
}

export default PropsTyping;
