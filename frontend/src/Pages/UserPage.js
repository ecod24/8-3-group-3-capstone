import UserProfile from '../Components/UserProfile.js';
import Checklist from '../Components/Checklist.js';

export default function UserPage() {
  return (
    <section>
      <Checklist />
      <UserProfile />
    </section>
  );
}
