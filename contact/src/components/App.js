import React, { Fragment } from "react";
import ComponentC from "./AboutContextAPI/ComponentC";
import { UserProvider } from "./AboutContextAPI/UserContext";
import PostForm from "./APIRequest/PostForm";
import PostList from "./APIRequest/PostList";
import ComponC from "./ReactHook/UseContext/ComponentC";
import "./App.css";
import DocTitleOne from "./ReactHook/CustomHook/DocTitleOne";
import DocTitleTwo from "./ReactHook/CustomHook/DocTitleTwo";
import Counter from "./ReactHook/CustomHook/Counter";
import UserInput from "./ReactHook/CustomHook/UserInput";
import TestUseEffect from "./TestUseEffect";

export const UserContext = React.createContext();
export const ChannelContext =
  React.createContext();

function App() {
  return (
    <div className='app'>
      <TestUseEffect />
      {/* 
      About UseContext
      <UserContext.Provider value={"Zayarwin"}>
        <ChannelContext.Provider
          value={"LetDiscuss"}
        >
          <ComponC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/*       
      Context the value
      <UserProvider value='zayariwn'>
        <ComponentC />
      </UserProvider>  */}

      {/* About render props
      <Counter>
        {(count, increaseHandler) => (
          <ClickIncrement
            count={count}
            increaseHandler={increaseHandler}
          />
        )}
      </Counter>
      <Counter>
        {(count, increaseHandler) => (
          <HoverIncrement
            count={count}
            increaseHandler={increaseHandler}
          />
        )}
      </Counter> */}
    </div>
  );
}

export default App;
