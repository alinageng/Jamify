import Follow from "./follow";

function DisplayUserFollow({ follows, followType }) {
    return (
        <ul className="list-group">
      {follows.map((follow) => (
        <li className="list-group-item" key={follow._id}>
          {followType === 'followers' ? (
            <h4>{follow.followerUsername}</h4>
          ) : (
            <h4>{follow.followedUsername}</h4>
          )}
        </li>
      ))}
    </ul>
  );
}
//       <ul className="list-group">
//         {follows.map((follow) => (
//           <li className="list-group-item" key={follow._id}>
//             <h4>{follow.followerUsername}</h4>
//             {/* Add more fields to display as needed */}
//           </li>
//         ))}
//       </ul>
//     );
//   }
export default DisplayUserFollow;