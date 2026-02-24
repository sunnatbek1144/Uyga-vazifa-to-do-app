function Body() {
	return (
		<>
			<h3>Mening Loyihalarim</h3>
			<div className='body-container'>
				<br />
				<div className='to-do-app'>
					<h2 className='todo'>Todo App</h2>
					<div className='vazifa'>
						<input
							className='input'
							type='text'
							placeholder='Vazifani yozing...'
						/>
						<button className='btn-add'>Add</button>
					</div>
					<br />
					<div className='buttons'>
						<h5>1. Salom </h5>
						<i class='fa-solid fa-trash'></i>
					</div>
					<div className='buttons'>
						<h5>2. Salom </h5>
						<i class='fa-solid fa-trash'></i>
					</div>
					<div className='buttons'>
						<h5>3. Salom </h5>
						<i class='fa-solid fa-trash'></i>
					</div>
				</div>
			</div>
			<div className='body-container-2'>
				<div className='number-container'>
					<button type='button' className='number-btn'>
						-
					</button>
					<h1 className='number'> 0</h1>
					<button type='button' className='number-btn'>
						+
					</button>
				</div>
			</div>
		</>
	)
}
export default Body
