import React from 'react'
import './Facts.css'

const Facts = ({darkMode}) => {
  return (
    <div>
        <div className="facts-flex-1">
            <img className='facts-flex-1-img' src="https://s3-alpha-sig.figma.com/img/aa13/6650/66f3e5fe87e0ff77a7d257e1ef2a8416?Expires=1693180800&Signature=HKr9BK2W2~ll05hZS1nh-fq7IN7ffhvrWxNnI43hb05WrENhWx3sQjEY2wncvEIZdor3iZepDbALgGELE0wxcuX2GyfOATBpNafhUsoJLG0mr04YDwE1hR15k9mK8pucpRtlddwByKL~EEv6DEP1AyyS~mYUUi9fuSc1qcV4LfXxd4nx8FfR07T5smEWG3ey096F9uGxOU1lyQvXQEdP5vvLPcLRLEbIHH5IHOA~o7ylhVE75ACzJ4wc5vf0FZimIbU9jkZ1yCyE6YpPrPzutabxvixrWZpn2UtRn8OPuUv8qITQ1dJwEXdix4NuWpO~MGmVZtTDER6RqwbGeymYHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <div className={darkMode ? "facts-text-body-dark" : "facts-text-body"}>
                <h3>Facts About The Creator Economy</h3> 
                <ul>
                    <li>Market size <span className={darkMode ? "light-font-size-dark" : "light-font-size"}>- $104.2 billion and growing</span> </li>
                    <li>Contributors <span className={darkMode ? "light-font-size-dark" : "light-font-size"}>- 50 million people and counting</span>  </li>
                    <li>Full time creators <span className={darkMode ? "light-font-size-dark" : "light-font-size"}> - 450k and more</span> </li>
                </ul>
            </div>
        </div>

        <div className="facts-flex-1">
        <img className='mobile-only' src="https://s3-alpha-sig.figma.com/img/b311/8784/fb0cb32e380ba8debc8af8592bba9aad?Expires=1693180800&Signature=F-Ked7Gg3SEAIth3XXPJeVJDHBaz8SNpy73iDuHyX4rVk3Je~H5fa7xyMTgzqH0USZlEGHm~3NrVsCHTjsy3pkbVrASuYwd0apX8OHVOk9FlZL8YXgyaib2ox~tv37txShBLL14KHC4x49BKhw8bTiT0zMRtRjmnipg44Hwhsy5FegjaCIkVB94~o-ON9R3VmrRlMyeAJ-de6vgb8czLtA8R8DWahfp5MgjAmwjr0feYH25ez7PhaT8fF~A55-QywMDFRXgvl8AVlWUGkYZyg7KEwaibNaR1Ch5yyG1ng1qMOiOY-nye0ytnSpt3Ukiqtse2-QF25u-CMD60vLEZ9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <div className={darkMode ? "facts-text-body2-dark" : "facts-text-body2"}>
                <h3>Did You Know?</h3>
                <ul>
                    <li> <span className={darkMode ? "light-font-size-dark" : "light-font-size"}>The creator economy is the output of human expression at all levels</span> </li>
                    <li><span className={darkMode ? "light-font-size-dark" : "light-font-size"}>One out of every four humans are creating somethin new</span>  </li>
                    <li><span className={darkMode ? "light-font-size-dark" : "light-font-size"}>Gen Z makes up to 13% of the total creator economy</span> </li>
                    <li><span className={darkMode ? "light-font-size-dark" : "light-font-size"}>67% creators have between 1,000 and 10,00 followers on social media.</span> </li>
                    <li><span className={darkMode ? "light-font-size-dark" : "light-font-size"}>An estimated 46 million creators are yet to break even in their creator journey</span> </li>
                </ul>
        </div>
        <img className='second-image' src="https://s3-alpha-sig.figma.com/img/b311/8784/fb0cb32e380ba8debc8af8592bba9aad?Expires=1693180800&Signature=F-Ked7Gg3SEAIth3XXPJeVJDHBaz8SNpy73iDuHyX4rVk3Je~H5fa7xyMTgzqH0USZlEGHm~3NrVsCHTjsy3pkbVrASuYwd0apX8OHVOk9FlZL8YXgyaib2ox~tv37txShBLL14KHC4x49BKhw8bTiT0zMRtRjmnipg44Hwhsy5FegjaCIkVB94~o-ON9R3VmrRlMyeAJ-de6vgb8czLtA8R8DWahfp5MgjAmwjr0feYH25ez7PhaT8fF~A55-QywMDFRXgvl8AVlWUGkYZyg7KEwaibNaR1Ch5yyG1ng1qMOiOY-nye0ytnSpt3Ukiqtse2-QF25u-CMD60vLEZ9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

        </div>

    </div>
  )
}

export default Facts