import React from "react";
import free from "../../images/free.gif";
export const AllGyms = ({ nearestGym }) => {
  console.log(nearestGym);
  return (
    <div className="right-for-list">
      <div className="overflow-auto h-500">
        {nearestGym.length ? (
          nearestGym.map((city) =>
            city.addressComponent.map((gym) => (
              <div
                key={gym.address1}
                className="gym-list-div d-flex flex-row  justify-between m-10"
              >
                <div className="w-20  d-flex">
                  <img src={free} width={50} height={50} alt="free" />
                </div>
                <div className="w-50">
                  <div className="innner-div">
                    <div className="heading">{gym.address1}</div>
                    <div>{city.city}</div>
                    <div>{gym.country}</div>
                    <div>Pin Code-{gym.pin}</div>
                  </div>
                  <div className="button-div">
                    <button className="submit-button">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
};
