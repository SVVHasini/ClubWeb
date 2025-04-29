export default function Tabbutton({children,isActive,onClick}){
    return(
        <button className={`decideButton ${isActive?"active":""}`}
        onClick={onClick}>{children}</button>
    );
}