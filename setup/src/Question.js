import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title, info} = props;
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleButton}>
          {toggle ? <AiOutlineMinus />: <AiOutlinePlus />}
        </button>
      </header>
      <p>{toggle ? `${info}`: ``}</p>
    </article>
  );
};

export default Question;
