const facts = [
    { label: "Nature of Business", value: "Manufacturer,Engineering Workshop" },
    {
      label: "Additional Business",
      value: "Factory / Manufacturing, Retail Business, Service Provision, Recipient of Goods or Services",
    },
    { label: "Company CEO", value: "Pappu D.Bade" },
    {
      label: "Registered Address",
      value: "Nagar Manmad road, Near Hotel Chaitanya Classic, Nagapur, MIDC Area, Ahilyanagar 414111 Maharashtra, India",
    },
    { label: "Total Number of Employees", value: "51 to 100 People" },
    { label: "GST Registration Date", value: "01-07-2017" },
    { label: "Legal Status of Firm", value: "Propriteory" },
    { label: "Annual Turnover", value: "50 -100 Cr" },
   
   
  ];
  const facts2 = [ {label:"Location Type", value:"URBAN"},
    {label:"Building Infrastructure", value:"Permanent" },
    {label:"Size of Premises", value:"3000 square feet" },
    {label:"Space Around", value:"Front porch" },
  ];
  const facts3 = [{label:"Tan no", value:"AAJPG1234K"},
    {label:"Banker", value:"HDFCBANKER" },
    {label:"GST NO", value:"27AOQPB9220H1ZV" },
   
  ];
  const facts4 = [{label:"Payment Mode", value:"Cheque,DD,RTGS,Credit Card,Cash,Bank Transfer" },
    {label:"Shipment Mode", value:"By Road" },
  
  ];
  const Factsheet = () => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8">
        <h2 className="bg-blue-100 text-xl font-semibold text-blue-800 px-6 py-4 border-b">Basic Information</h2>
        <div className="divide-y">
          {facts.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row px-6 py-4">
              <div className="md:w-1/3 font-medium text-gray-700">{item.label}</div>
              <div className="md:w-2/3 text-gray-800 mt-2 md:mt-0">{item.value}</div>
            </div>
          ))}
        </div>
        <h2 className="bg-blue-100 text-xl font-semibold text-blue-800 px-6 py-4 border-b">Infrastructure </h2>
        <div className="divide-y">
          {facts2.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row px-6 py-4">
              <div className="md:w-1/3 font-medium text-gray-700">{item.label}</div>
              <div className="md:w-2/3 text-gray-800 mt-2 md:mt-0">{item.value}</div>
            </div>
          ))}
        </div>
        <h2 className="bg-blue-100 text-xl font-semibold text-blue-800 px-6 py-4 border-b">Statutory Profile </h2>
        <div className="divide-y">
          {facts3.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row px-6 py-4">
              <div className="md:w-1/3 font-medium text-gray-700">{item.label}</div>
              <div className="md:w-2/3 text-gray-800 mt-2 md:mt-0">{item.value}</div>
            </div>
          ))}
        </div>
        <h2 className="bg-blue-100 text-xl font-semibold text-blue-800 px-6 py-4 border-b">Packaging/Payment and Shipment Details
        </h2>
        <div className="divide-y">
          {facts4.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row px-6 py-4">
              <div className="md:w-1/3 font-medium text-gray-700">{item.label}</div>
              <div className="md:w-2/3 text-gray-800 mt-2 md:mt-0">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Factsheet;
  