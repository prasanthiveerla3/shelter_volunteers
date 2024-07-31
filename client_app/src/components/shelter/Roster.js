import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "../../styles/shelter/Roster.css";

const Roster = (props) => {
    const currentTime = Date.now();
    const filteredShifts = props.shiftDetails.filter(item => item.start_time >= currentTime);
    return (
      <div className="roster-item-container">
        {filteredShifts.slice(0, 3).map((item, index) => (
          <div key={index}>
            <progress 
              value={item.count / 10} 
              className="full-width-progress" 
            />
            <div className="roster-item">
              <PeopleAltIcon />
              <span>{item.count} Volunteer(s)</span>
              <span>{new Date(item.start_time).toLocaleString([], { hour: 'numeric', hour12: true })} - {new Date(item.end_time).toLocaleString(
                [], { hour: 'numeric', hour12: true })}</span>
            </div>
          </div>
      ))}
      </div> 
    );
};

export default Roster;
