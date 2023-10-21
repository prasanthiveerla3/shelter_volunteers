import { format } from "date-fns";

const ShiftList = (props) => {
  function onCheckboxClick(event) {
    if (props.onCheck) {
      props.onCheck(event);
    }
  }
  return (
    <div>
      {/* Display the shift*/}
      {props.shifts &&
        props.shifts.map((shift) => {
          const startTime = new Date(shift.start_time);
          const endTime = new Date(shift.end_time);

          // format the start and end time to human-readable strings
          const formattedStartTime = format(startTime, "MMMM dd, yyyy HH:mm");
          const formattedEndTime = format(endTime, "MMMM dd, yyyy HH:mm");
          return (
            <div class="shift text-center" key={shift.code}>
              {props.fromShelter == true && (
                <div class="text-right">
                  <input
                    type="checkbox"
                    id={"shift-checkbox-" + shift.code}
                    onClick={onCheckboxClick}
                  />
                </div>
              )}
              {props.fromShelter !== true && (
                <div>
                  <h2>{shift.shelter}</h2>
                </div>
              )}
              <p>
                {" "}
                {formattedStartTime} - {formattedEndTime}{" "}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default ShiftList;
