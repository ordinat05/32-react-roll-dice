import React from 'react'
import './Dice.css'
function Dice({ face, rolling }) {
	return (
		<div>
			<i className={`dice fas fa-dice-${face} ${rolling && "shaking"}`}></i>
			{/* Burası ; rolling varsa ⏰ 20:53  */}
			{/* <i className={`dice fas fa-dice-${face} ${rolling ? "shaking" : null}`}></i> */}
			{/* Burası ; rolling varsa ⏰ 20:53  */}
		</div>
	)
}

export default Dice
