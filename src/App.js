import ChatBot from 'react-simple-chatbot'
import { Segment }  from "semantic-ui-react"
import './App.css'
function App() {

  const steps = [
    {
      id: "Welcome",
      message: "Hello, Welcome to chatbot",
      trigger: "Done",
    },
    {
      id : "Done",
      message: "Please Enter your Name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hii {previoudValue} , Please select your issue",
      trigger: "issues",

    },
    {
      id: "issues",
      options:[
        { value: "React", label:"React", trigger: "React"},

         { value: "Angular", label:"Angular", trigger: "Angular"},
      ]
    },
    {
      id: "React",
      message: "Thanks for telling your React issue",
      end : true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your Angular issue",
      end : true,
    },
  ];


  return (
      <div className='chatbot'>
    <>
    <Segment floated = "right">
      <ChatBot steps={steps} /> 
    </Segment>
    </>
    </div>
  );
}

export default App;
