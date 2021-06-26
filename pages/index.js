import { useState } from "react";
import useClipboard from "react-use-clipboard";

function HomePage() {
  const [GSMAlarms, set2GAlarms] = useState("");
  const [WCDMAAlarms, set3GAlarms] = useState("");
  const [LTEAlarms, set4GAlarms] = useState("");
  const [GSMSiteID, set2GSiteID] = useState([]);
  const [WCDMASiteID, set3GSiteID] = useState([]);
  const [LTESiteID, set4GSiteID] = useState([]);
  const regexes = {
    id: /[BETHNYKW]\d{4}/i,
  };

  function handleOnChange(e, setSites, setAlarms) {
    //changing TextArea value
    const value = e.target.value;
    setAlarms(value);

    //regexing and filtering site IDS
    let alarmList = value.split("\n");

    let siteIDList = alarmList.reduce((unique, alarm) => {
      const regexed = alarm.match(regexes.id);
      if (!regexed) {
        return unique;
      }
      return unique.includes(regexed[0]) ? unique : [...unique, regexed[0]];
    }, []);

    setSites(siteIDList);
  }

  return (
    <div className="flex overflow-hidden font-mono bg-gray-400">
      {/* <nav className="w-24 h-screen "></nav> */}
      <div className="w-1/2 h-screen">
        <textarea
          placeholder="Insert your alarm or text to process"
          className="
          w-full
          shadow-2xl
          h-1/3 text-xs
          focus:border-none p-4
          leading-3 
          bg-gray-800
          text-gray-200
          focus:outline-none
          resize-none "
          value={GSMAlarms}
          onChange={(e) => {
            handleOnChange(e, set2GSiteID, set2GAlarms);
          }}
        />
        <textarea
          placeholder="Insert your alarm or text to process"
          className="
          w-full
          shadow-2xl
          h-1/3 text-xs
          focus:border-none p-4
          leading-3 
          bg-gray-800
          text-gray-200
          focus:outline-none
          resize-none "
          value={WCDMAAlarms}
          onChange={(e) => {
            handleOnChange(e, set3GSiteID, set3GAlarms);
          }}
        />
        <textarea
          placeholder="Insert your alarm or text to process"
          className="
          w-full
          shadow-2xl
          h-1/3 text-xs
          focus:border-none p-4
          leading-3 
          bg-gray-800
          text-gray-200
          focus:outline-none
          resize-none "
          value={LTEAlarms}
          onChange={(e) => {
            handleOnChange(e, set4GSiteID, set4GAlarms);
          }}
        />
      </div>
      <div className="w-1/2 h-screen">
        {GSMSiteID ? (
          <textarea
            readOnly
            className="
            w-full
            shadow-2xl
            h-1/3 text-xs
            focus:border-none p-4
            leading-3 
            bg-gray-900
            text-gray-200
            focus:outline-none
            resize-none 
            border-l-2"
            value={GSMSiteID.join(", ")}
          />
        ) : null}
        {WCDMASiteID ? (
          <textarea
            readOnly
            className="
            w-full
            shadow-2xl
            h-1/3 text-xs
            focus:border-none p-4
            leading-3 
            bg-gray-900
            text-gray-200
            focus:outline-none
            resize-none 
            border-l-2"
            value={WCDMASiteID.join(", ")}
          />
        ) : null}
        {LTESiteID ? (
          <textarea
            readOnly
            className="
            w-full
            shadow-2xl
            h-1/3 text-xs
            focus:border-none p-4
            leading-3 
            bg-gray-900
            text-gray-200
            focus:outline-none
            resize-none 
            border-l-2"
            value={LTESiteID.join(", ")}
          />
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
