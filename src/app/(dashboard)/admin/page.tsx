import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row" dir="rtl">
      {/* الجانب الأيمن - البطاقات */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="طالب" />
          <UserCard type="معلم" />
          <UserCard type="ولي أمر" />
          <UserCard type="إداري" />
        </div>
      </div>
      
      {/* الجانب الأيسر - المحتوى الرئيسي */}
      <div className="w-full lg:w-1/3">
        {/* هنا يمكنك إضافة المحتوى الرئيسي */}
      </div>
    </div>
  );
};

export default AdminPage;