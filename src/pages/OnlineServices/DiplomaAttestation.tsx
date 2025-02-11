const DiplomaAttestation = () => {
  return (
    <div id="diploma-attestation" className="mb-6 p-6 shadow-orange-200 shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white">
      <div className="flex justify-start items-center  gap-2 py-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <h3 className="text-xl font-bold text-gray-800 ">تصديق الوثائق</h3>

      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        لتصديق الدبلوم، يرجى اتباع الخطوات التالية:
      </p>
      <ol className="list-decimal list-inside text-gray-600 space-y-2">
        <li>قم بتعبئة النموذج الخاص بتصديق الشهادات.</li>
        <li>أرفق صورة من الدبلوم مع المستندات المطلوبة.</li>
        <li>تأكد من صحة المعلومات المدخلة في النموذج.</li>
        <li>قم بتقديم الطلب إلى الملحقية الثقافية.</li>
        <li>انتظر الرد على طلبك من خلال البريد الإلكتروني المسجل.</li>
      </ol>
      <p className="text-gray-600 leading-relaxed mt-4">
        يمكنك تحميل الملفات والمعلومات المطلوبة عبر النموذج التالي:
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfLH2WsXVXUUcu3jJw9eeMCdY8wSBm9vXWSkLFrDJWr-2lFYA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-1"
          >
            نموذج تحميل الملفات
          </a>
        </p>
      </p>
    </div>
  );
};

export default DiplomaAttestation;
