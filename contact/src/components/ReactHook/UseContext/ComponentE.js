import React, { useContext } from "react";
import {
  UserContext,
  ChannelContext,
} from "../../App";

function ComponentE() {
  const userName = useContext(UserContext);
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User value is {user} and
                    channel is {channel}.
                    {userName}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentE;
