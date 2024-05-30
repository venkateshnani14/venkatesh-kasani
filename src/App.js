import "./App.css";
import {FloatingNavbar,HorizontalFnav} from "./components/Fnav";
import  { IssueScreen,FeedbackScreen,ContactScreen }  from "./components/IssueScreens";
import {useState} from 'react'
import gsap from 'gsap'

const App = () => {
  gsap.fromTo("#showName",{opacity:0,y:100},{y:0,opacity:1,duration:2.5,ease:"power1"})
  const issue_heading = "Let us know about the issue you are facing right now!"
  const issue_textAreaHeading = "Describe the issue in detail"
  const suggestion_heading = "Share your suggestions with us for a chance to earn rewards!"
  const suggestion_textAreaHeading = "Describe the suggestion in detail"
  const [feedbackOption,setFeedbackOption] = useState();
  const [openedFAB,setOpenedFAB] = useState(false);
  const [selectedOption,setSelectedOption] = useState(false);
  const updateOptionsFromChild = (bool,data) => {
    setSelectedOption(bool);
    setFeedbackOption(data);
  }

  return (
    <div className="bg-black h-full relative">
    <div className={`fixed bottom-0 right-0 md:right-7 md:mb-4 md:mr-4 ${openedFAB && selectedOption && "flex"}`} >
    {
      openedFAB  && !selectedOption && (
        <FloatingNavbar updateOptionsFromChild={updateOptionsFromChild} selectedOption={selectedOption}   />
      )
    } {
      openedFAB  && selectedOption ? (
      <>
        <div className="flex flex-col justify-end items-end transition-all duration-500">
          {
        feedbackOption === 'issue' ? (
          <IssueScreen heading ={issue_heading} textAreaHeading={issue_textAreaHeading} />
        ) : feedbackOption === 'suggestion' ? (
          <IssueScreen heading ={suggestion_heading} textAreaHeading={suggestion_textAreaHeading} />
        ) : feedbackOption === 'feedback' ? (
          <FeedbackScreen className='transition-all duration-800'/>
        ) : (  <ContactScreen />  )
      }
        <div className="flex items-end justify-end">
        <HorizontalFnav />
          <img id="desktopFAB" src={openedFAB?"/images/cross.png":"/images/desktopFAB.png"} className = {`h-12 w-12 md:h-15 md:w-15 cursor-pointer transition-opacity duration-300`} onClick={()=>setOpenedFAB(!openedFAB)} />
        </div>
      </div>
        </>
    ):
    <div className="flex flex-col items-end">
          <img id="desktopFAB" src={openedFAB?"/images/cross.png":"/images/desktopFAB.png"} className = {`h-12 w-12 md:h-15 md:w-15 cursor-pointer transition-opacity duration-300`} onClick={()=>setOpenedFAB(!openedFAB)} />
    </div>}
    
    </div>
    <div>
      <h1 id="showName" className="text-sm md:text-2xl lg:text-3xl text-center py-8">Hello there,<br/><span className="text-blue-500">I'm Venkatesh Kasani</span></h1>
      <img src="images/flag.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]" />
      <img src="images/chat.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]"  />
      <img src="images/suggestions.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]" />
      <img src="images/feedback.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]" />
      <img src="images/chat.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]"  />
      <img src="images/cross.png" className="h-[20%] w-[20%] md:h-[8%] md:w-[10%]"  />
    </div>
    </div>
  );
}

export default App;