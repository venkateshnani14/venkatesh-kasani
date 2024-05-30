export const options = [
    {value:"concept_cards",
        label:"Concept cards"
    },
    {value:"Interview_questions",
        label:"Interview questions"
    },
    {value:"Practice_questions",
        label:"Practice questions"
    },
    {value:"Quiz",
        label:"Quiz"
    }
]
export const defaultValue = [{
    value:"Interview_questions",
    label:"Interview questions"
}]

export const dropDownStyles = () => (
    {
        control: (base, state) => ({
            ...base,
            border: state.isFocused ? '2px solid #4CAF50' : '2px solid #A0AEC0',
            borderRadius: '5px',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(76, 175, 80, 0.3)' : null,
            '&:hover': {
              border: '2px solid #4CAF50',
            },
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#D1D5DB' : '#FFFFFF',
            color: state.isSelected ? '#FFFFFF' : '#000000',
            margin:"0px 2px",
            '&:hover': {
              backgroundColor: '#D1D5DB',
              color: '#FFFFFF',
            },
          })
})