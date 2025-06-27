import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="طالب" />
          <UserCard type="معلم" />
          <UserCard type="ولي أمر" />
          <UserCard type="إداري" />
        </div>
      </div>
      
      <div className="w-full lg:w-1/3">
        {/* المحتوى الجانبي */}
      </div>
    </div>
  );
};

export default AdminPage;