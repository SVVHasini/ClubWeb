import './navigation.css';
export const Navbar=()=>{
  return (
    <div className="mainFrameNav">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img className="logo-img" src="Vig.png" alt="logo" />
      <button className='NavButton'>Home</button></div>
      <div className='SearchDiv'><input type="search" className='NavSearch' ></input><i class="pi pi-search"></i></div>
      <div><button className='NavButton'>login</button>
      <button className='NavButton'>contact</button></div>
    </div>
  )
}