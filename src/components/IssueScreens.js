import {Select} from 'react-dropdown-select'
import FileInputButton from './FileInputButton'
import {options,defaultValue,dropDownStyles} from '../Helpers/constants'

export const IssueScreen = (props) => {
    return(
        <div className="bg-smokewhite w-full h-2/3  md:w-[64.4%] md:h-[99.6%] px- md:px-3 rounded mr-1 my-1 md:mr-2 md:my-2">
         <form>
         <h2 className="px-4 text-center font-semibold py-3">{props.heading}</h2>
         <hr className='border border-1 border-gray-300'/>
         <div className="pt-4">
         <p className="text-sm pb-2 font-semibold text-gray-700">Choose a section</p>
         <Select className="bg-gray-300" options ={options} defaultValue = {defaultValue} placeholder={"Interview questions"}
         styles ={dropDownStyles}
          />
         </div>
         <div className='py-4'>
            <p className='pb-2 text-sm font-semibold text-gray-700'>{props.textAreaHeading} <span className="text-red-600"> *</span></p>
            <FileInputButton />
         </div>
         <div className='flex justify-end pb-4'>
         <button type='submit' className='px-3 py-1 bg-submitbg text-white font-semibold rounded'>Submit</button>
         </div>
         </form>
        </div>
    )
}

export const FeedbackScreen = () => {
    return(
             <div className="bg-smokewhite w-full h-2/3 md:w-[74.4%] md:h-[99.6%] px-3 rounded mr-2 my-2 transition-all duration-400">
         <form>
         <h2 className="px-4 text-center font-semibold py-3">Let us know your feedback about us!</h2>
         <hr className='border border-1 border-gray-300'/>
         <div className='py-4'>
            <FileInputButton />
            <input type='checkbox' id='feedbackCheckbox' />
            <label for='feedbackCheckbox' className='text-sm' > Send feedback anonymously</label>
         </div>
         <div className='flex justify-end pb-4'>
         <button type='submit' className='px-3 py-1 bg-submitbg text-white font-semibold rounded'>Submit</button>
         </div>
         </form>
        </div>
    )
}

export const ContactScreen = () => {
    return(
             <div className="bg-smokewhite w-[74.4%] h-[99.6%] px-3 rounded mr-2 my-2">
         <form>
         <h2 className="px-4 text-center font-semibold py-3">Let us know your feedback about us!</h2>
         <hr className='border border-1 border-gray-300'/>
         <div className='py-4'>
            <div className='text-sm font-semibold text-gray-700'>Your name</div>
            <input id='name' placeholder='Enter your Name' type='text' className='bg-zinc-300 rounded w-full outline-none p-2 text-sm' />
         </div>
         <FileInputButton />
         <div className='flex justify-end pb-4'>
         <button type='submit' className='px-3 py-1 mt-4 bg-submitbg text-white font-semibold rounded'>Submit</button>
         </div>
         </form>
        </div>
    )
}

