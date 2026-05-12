'use strict'

// Questions generated with AI assistance (Claude) and manually verified for accuracy.
// Additional validation will be done by my colleagues experienced HGV drivers to ensure correctness.
const QUESTIONS = [
  // DRIVING TIMES
  {
    category: "driving-times",
    question: "What is the maximum continuous driving time allowed before a mandatory break?",
    answers: ["3 hours", "4.5 hours", "5 hours", "6 hours"],
    correct: 1,
    explanation: "Under EU Regulation 561/2006 (retained in UK law), a driver must take a break after no more than 4.5 hours of continuous or cumulative driving."
  },
  {
    category: "driving-times",
    question: "What is the maximum daily driving time for a professional driver?",
    answers: ["8 hours", "9 hours", "10 hours", "11 hours"],
    correct: 1,
    explanation: "The standard maximum daily driving time is 9 hours. This can be extended to 10 hours, but only twice per week."
  },
  {
    category: "driving-times",
    question: "How long must a mandatory break be after 4.5 hours of driving?",
    answers: ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
    correct: 2,
    explanation: "A break of at least 45 minutes is required after 4.5 hours of driving. It can be split into a 15-minute break followed by a 30-minute break."
  },
  {
    category: "driving-times",
    question: "How many times per week can a driver extend daily driving to 10 hours?",
    answers: ["Once", "Twice", "Three times", "Every day"],
    correct: 1,
    explanation: "A driver may extend their daily driving time from 9 hours to 10 hours a maximum of twice per week."
  },
  {
    category: "driving-times",
    question: "What is the maximum weekly driving time?",
    answers: ["45 hours", "50 hours", "56 hours", "60 hours"],
    correct: 2,
    explanation: "The maximum driving time in any single week is 56 hours. This is in addition to the two-week limit of 90 hours."
  },
  {
    category: "driving-times",
    question: "What is the maximum driving time in any two consecutive weeks?",
    answers: ["80 hours", "90 hours", "100 hours", "112 hours"],
    correct: 1,
    explanation: "Over any two consecutive weeks, total driving time must not exceed 90 hours, even if the weekly limit of 56 hours has not been reached in either week."
  },
  {
    category: "driving-times",
    question: "Can a break be split when using the split break rule?",
    answers: ["No, it must be taken all at once", "Yes: first 15 min then 30 min", "Yes: first 30 min then 15 min", "Yes: two breaks of 30 min each"],
    correct: 1,
    explanation: "The split break rule allows the 45-minute break to be divided into two parts: the first must be at least 15 minutes and the second at least 30 minutes, in that order."
  },
  {
    category: "driving-times",
    question: "A driver starts at 06:00 with no previous driving. When must they take a break?",
    answers: ["10:00", "10:30", "11:00", "12:00"],
    correct: 1,
    explanation: "Starting at 06:00 and driving continuously, the 4.5-hour limit is reached at 10:30. A break must be taken by that time."
  },
  {
    category: "driving-times",
    question: "Does time spent loading/unloading count as driving time?",
    answers: ["Yes, always", "No, never", "Only if over 1 hour", "Only on international routes"],
    correct: 1,
    explanation: "Loading and unloading is classified as 'other work', not driving time. It does not count toward the 4.5-hour driving limit, but it does count as working time."
  },
  {
    category: "driving-times",
    question: "After a break, when does the 4.5-hour driving limit reset?",
    answers: ["After any stop", "Only after a 45-minute break", "After 30 minutes", "Only after a rest period"],
    correct: 1,
    explanation: "The 4.5-hour driving accumulation only resets after a qualifying break of at least 45 minutes (or the split equivalent). A short stop does not reset the clock."
  },

  // REST PERIODS
  {
    category: "rest-periods",
    question: "What is the minimum daily rest period for a driver?",
    answers: ["8 hours", "9 hours", "10 hours", "11 hours"],
    correct: 3,
    explanation: "The standard minimum daily rest is 11 consecutive hours. This can be reduced to 9 hours (reduced daily rest) up to three times between weekly rests."
  },
  {
    category: "rest-periods",
    question: "How many times per week can a driver take a reduced daily rest of 9 hours?",
    answers: ["Once", "Twice", "Three times", "Unlimited"],
    correct: 2,
    explanation: "A driver may reduce their daily rest to a minimum of 9 hours up to three times between any two weekly rest periods. No compensation is required for this reduction."
  },
  {
    category: "rest-periods",
    question: "What is the minimum weekly rest period?",
    answers: ["24 hours", "36 hours", "45 hours", "56 hours"],
    correct: 2,
    explanation: "A regular weekly rest must be at least 45 consecutive hours. A reduced weekly rest of at least 24 hours is permitted but must be compensated later."
  },
  {
    category: "rest-periods",
    question: "How often must a driver take a regular weekly rest?",
    answers: ["Every week", "Every two weeks", "Every three weeks", "Every four weeks"],
    correct: 1,
    explanation: "A driver must take a regular weekly rest (at least 45 hours) at least once every two weeks. In the alternate week, a reduced weekly rest of at least 24 hours is permitted."
  },
  {
    category: "rest-periods",
    question: "Can weekly rest be taken in a vehicle cabin?",
    answers: ["Yes, always", "Only reduced weekly rest", "No, never", "Only in approved vehicles"],
    correct: 1,
    explanation: "Regular weekly rest (45+ hours) must NOT be taken in a vehicle. However, a reduced weekly rest (minimum 24 hours) may be taken in the vehicle cabin if it has suitable sleeping facilities."
  },
  {
    category: "rest-periods",
    question: "What is a reduced weekly rest period?",
    answers: ["Less than 45 hours but at least 24 hours", "Less than 24 hours", "Exactly 36 hours", "Less than 36 hours"],
    correct: 0,
    explanation: "A reduced weekly rest is any weekly rest between 24 hours and 44 hours 59 minutes. The reduction must be compensated en bloc before the end of the third week following."
  },
  {
    category: "rest-periods",
    question: "When must any reduction in weekly rest be compensated?",
    answers: ["By the end of the following week", "Within 2 weeks", "Within 3 weeks", "Within 4 weeks"],
    correct: 2,
    explanation: "Any reduction in weekly rest must be compensated by an equivalent period of rest taken en bloc before the end of the third week following the week in question."
  },
  {
    category: "rest-periods",
    question: "A split daily rest must total at least how many hours?",
    answers: ["9 hours", "10 hours", "11 hours", "12 hours"],
    correct: 2,
    explanation: "When a daily rest is split, the total must still add up to at least 11 hours. The split is typically 3 hours followed by 9 hours, or vice versa."
  },
  {
    category: "rest-periods",
    question: "The first part of a split daily rest must be at least:",
    answers: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correct: 2,
    explanation: "When taking a split daily rest, the first part must be an uninterrupted period of at least 3 hours, and the second part at least 9 hours — totalling 12 hours minimum."
  },
  {
    category: "rest-periods",
    question: "What happens if a driver does not take sufficient rest?",
    answers: ["A verbal warning only", "A fine and possible prohibition from driving", "Loss of licence immediately", "Nothing on first offence"],
    correct: 1,
    explanation: "DVSA enforcement officers can issue fixed penalty notices and prohibit the vehicle from moving until sufficient rest has been taken. Serious or repeated offences can result in prosecution."
  },

  // TACHOGRAPH RULES
  {
    category: "tachograph-rules",
    question: "What does a tachograph record?",
    answers: ["Only driving time", "Speed, distance and driver activity", "Fuel consumption only", "Engine temperature"],
    correct: 1,
    explanation: "A tachograph continuously records vehicle speed, distance travelled, and the driver's activity mode (driving, other work, availability, rest). It is a legal requirement on most HGVs."
  },
  {
    category: "tachograph-rules",
    question: "How long must tachograph records be kept by the driver?",
    answers: ["7 days", "28 days", "3 months", "1 year"],
    correct: 1,
    explanation: "Drivers must keep tachograph records for the current week plus the last 28 calendar days and carry them while on duty so enforcement officers can inspect them."
  },
  {
    category: "tachograph-rules",
    question: "What does the 'bed' symbol on a tachograph represent?",
    answers: ["Break", "Rest period", "Other work", "Availability"],
    correct: 1,
    explanation: "The bed symbol (a horizontal figure) represents a rest period — time when the driver is not available for work and is taking their required rest."
  },
  {
    category: "tachograph-rules",
    question: "What is the penalty for tampering with a tachograph?",
    answers: ["Warning only", "Fine only", "Criminal offence with fines and imprisonment", "Licence points"],
    correct: 2,
    explanation: "Tampering with or interfering with a tachograph is a criminal offence under UK law. It can result in unlimited fines and up to two years imprisonment, as well as loss of operator licence."
  },
  {
    category: "tachograph-rules",
    question: "How many driver card slots does a digital tachograph have?",
    answers: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "A digital tachograph has two driver card slots — one for the primary driver and one for a co-driver. Both activities are recorded simultaneously."
  },
  {
    category: "tachograph-rules",
    question: "What should a driver do if the tachograph malfunctions?",
    answers: ["Continue driving normally", "Stop immediately", "Make manual records and get it repaired ASAP", "Report it at the end of the week"],
    correct: 2,
    explanation: "If the tachograph breaks down, the driver must manually record their activities on paper and have the unit repaired by an approved calibration centre as soon as reasonably possible."
  },
  {
    category: "tachograph-rules",
    question: "How long is a driver card valid?",
    answers: ["3 years", "5 years", "7 years", "10 years"],
    correct: 1,
    explanation: "A digital tachograph driver card is valid for 5 years. Drivers must apply for renewal before it expires to avoid driving without a valid card."
  },
  {
    category: "tachograph-rules",
    question: "What symbol is used for 'other work' on a tachograph?",
    answers: ["Steering wheel", "Hammer/crossed hammers", "Bed", "Clock"],
    correct: 1,
    explanation: "The hammer (or crossed hammers) symbol represents 'other work' — any work-related activity that is not driving, such as loading, admin tasks, or vehicle checks."
  },
  {
    category: "tachograph-rules",
    question: "When must a driver insert their card into a digital tachograph?",
    answers: ["At the start of each day", "At the start of each journey", "Only on long journeys", "Once per week"],
    correct: 0,
    explanation: "A driver must insert their driver card at the beginning of each working day. The card must remain inserted throughout the day and should only be removed at the end of the daily rest period."
  },
  {
    category: "tachograph-rules",
    question: "What is 'availability' (POA) on a tachograph?",
    answers: ["Time spent driving", "Time when driver is available but not driving or working", "Break time", "Loading time"],
    correct: 1,
    explanation: "Period of Availability (POA) is time when a driver is not driving or doing other work but must be available — for example, waiting at a customer's premises or travelling as a passenger. It is recorded with the square symbol."
  },

  // ROAD SAFETY
  {
    category: "road-safety",
    question: "What is the national speed limit for HGVs on a motorway in the UK?",
    answers: ["50 mph", "56 mph", "60 mph", "70 mph"],
    correct: 1,
    explanation: "HGVs over 7.5 tonnes are limited to 56 mph on motorways in the UK. Most modern HGVs have a speed limiter set to this maximum."
  },
  {
    category: "road-safety",
    question: "What is the minimum following distance recommended for HGVs at 60 mph?",
    answers: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
    correct: 2,
    explanation: "A minimum 3-second gap is recommended for HGVs in good conditions. In poor weather or with a heavy load, this should be significantly increased as stopping distances are much greater than for cars."
  },
  {
    category: "road-safety",
    question: "What should you check before driving an HGV?",
    answers: ["Only fuel level", "Tyres, lights, brakes and mirrors", "Only the mirrors", "Only the load security"],
    correct: 1,
    explanation: "A pre-drive walkaround check must cover tyres (pressure and condition), lights, brakes, mirrors, fluid levels, load security and any visible defects. This is a legal requirement."
  },
  {
    category: "road-safety",
    question: "What is 'squeeze braking'?",
    answers: ["Emergency full brake", "Gradually increasing brake pressure", "Using the handbrake", "Engine braking only"],
    correct: 1,
    explanation: "Squeeze braking means progressively increasing brake pressure smoothly rather than applying full force immediately. This reduces the risk of skidding and maintains vehicle stability, especially when loaded."
  },
  {
    category: "road-safety",
    question: "What causes most HGV accidents in the UK?",
    answers: ["Bad weather", "Mechanical failure", "Driver error and fatigue", "Poor road conditions"],
    correct: 2,
    explanation: "Driver error and fatigue are the leading causes of HGV accidents in the UK. This is why tachograph regulations and rest period rules are strictly enforced."
  },
  {
    category: "road-safety",
    question: "What should a driver do when approaching a low bridge?",
    answers: ["Speed up to get through quickly", "Check vehicle height against bridge clearance", "Sound the horn", "Flash lights"],
    correct: 1,
    explanation: "The driver must know their vehicle's height and compare it against the bridge clearance sign. If in doubt, find an alternative route. Striking a bridge can cause serious danger and significant penalties."
  },
  {
    category: "road-safety",
    question: "What is the legal minimum tread depth for HGV tyres?",
    answers: ["1mm", "1.6mm", "2mm", "3mm"],
    correct: 1,
    explanation: "The legal minimum tread depth for HGV tyres is 1mm across the central three-quarters of the tread width and around the entire circumference. However, 2mm is commonly recommended for safety."
  },
  {
    category: "road-safety",
    question: "When is an HGV most likely to roll over?",
    answers: ["On motorways", "On sharp bends taken too fast", "In rain", "When fully loaded on a straight road"],
    correct: 1,
    explanation: "HGVs have a high centre of gravity, especially when loaded. Taking sharp bends, roundabouts or slip roads at excessive speed dramatically increases the risk of rollover."
  },
  {
    category: "road-safety",
    question: "What is the purpose of a vehicle's ABS?",
    answers: ["Increase speed", "Prevent wheels from locking during braking", "Reduce fuel consumption", "Improve acceleration"],
    correct: 1,
    explanation: "Anti-lock Braking System (ABS) prevents the wheels from locking up during hard braking. This maintains steering control and helps reduce stopping distances on most surfaces."
  },
  {
    category: "road-safety",
    question: "What should a driver do if they feel drowsy while driving?",
    answers: ["Open the window and continue", "Turn up the radio", "Stop safely and take a rest", "Drink coffee and continue"],
    correct: 2,
    explanation: "The only safe response to drowsiness is to stop in a safe place and rest. Opening windows or drinking coffee are temporary measures that do not address the underlying fatigue and can give a false sense of alertness."
  },

  // VEHICLE CHECKS
  {
    category: "vehicle-checks",
    question: "How often should a walkaround check be carried out?",
    answers: ["Weekly", "Before every journey", "Monthly", "Only after servicing"],
    correct: 1,
    explanation: "A walkaround check must be completed before every journey. It is the driver's legal responsibility to ensure the vehicle is roadworthy before driving it."
  },
  {
    category: "vehicle-checks",
    question: "What should you check in the engine bay before a journey?",
    answers: ["Only oil level", "Oil, coolant, brake fluid and power steering fluid", "Only fuel level", "Only the battery"],
    correct: 1,
    explanation: "Engine bay checks should include engine oil, coolant level, brake fluid, power steering fluid, and windscreen washer fluid. Low levels can cause serious mechanical failure or create a danger on the road."
  },
  {
    category: "vehicle-checks",
    question: "What tyre pressure should HGV tyres be at?",
    answers: ["Same as a car", "As specified in the vehicle handbook", "60 psi always", "As low as possible"],
    correct: 1,
    explanation: "Tyre pressures vary by vehicle type, load and axle. The correct pressures are specified in the vehicle handbook. Incorrect pressure affects braking, fuel consumption and tyre life."
  },
  {
    category: "vehicle-checks",
    question: "What should you do if you find a defect before a journey?",
    answers: ["Drive anyway", "Report it and do not drive until fixed", "Only report at end of day", "Fix it yourself immediately"],
    correct: 1,
    explanation: "Any defect that affects the safety of the vehicle must be reported immediately and the vehicle must not be used until it has been repaired. Driving with a known defect is a criminal offence."
  },
  {
    category: "vehicle-checks",
    question: "How should you check your mirrors are adjusted correctly?",
    answers: ["From outside the cab", "From the driving seat", "At the start of each week", "Only after mirror replacement"],
    correct: 1,
    explanation: "Mirrors must be adjusted from the driving seat to ensure they give the correct field of view for that specific driver. Different drivers have different seating positions."
  },
  {
    category: "vehicle-checks",
    question: "What is the purpose of checking the load before driving?",
    answers: ["To estimate journey time", "To ensure it is secure and within weight limits", "To check the manifest", "For insurance purposes"],
    correct: 1,
    explanation: "The driver is responsible for ensuring the load is properly secured, correctly distributed, and within the vehicle's legal weight limits. An unsecured or overweight load is dangerous and illegal."
  },
  {
    category: "vehicle-checks",
    question: "What should lights and indicators be checked for?",
    answers: ["Brightness only", "That they work correctly and are clean", "Only brake lights", "Colour"],
    correct: 1,
    explanation: "All lights and indicators must be checked to confirm they function correctly and are clean and visible. Faulty or dirty lights are an MOT failure and can result in a prohibition notice."
  },
  {
    category: "vehicle-checks",
    question: "What is the consequence of driving with a known defect?",
    answers: ["No consequence", "Prosecution and prohibition", "Only a warning", "Higher insurance"],
    correct: 1,
    explanation: "Driving a vehicle with a known dangerous defect can lead to prosecution under road traffic law, an immediate prohibition notice, and can invalidate your insurance in the event of an accident."
  },
  {
    category: "vehicle-checks",
    question: "How should air brakes be checked?",
    answers: ["Listen for air escaping", "Check pressure gauge builds to correct level", "Only the pedal feel", "By a mechanic only"],
    correct: 1,
    explanation: "Air brake systems should be checked by monitoring the pressure gauge as the system builds up to the correct operating pressure. Any unusual pressure drops or air leaks should be reported as a defect."
  },
  {
    category: "vehicle-checks",
    question: "What document records vehicle defects found during checks?",
    answers: ["Driver log", "Defect report / vehicle inspection report", "Tachograph", "Manifest"],
    correct: 1,
    explanation: "Any defects found must be recorded on a defect report (also called a vehicle inspection report or DVIR). This creates a legal record and ensures the operator is aware and can arrange repairs."
  },

  // CPC MIXED
  {
    category: "cpc-mixed",
    question: "What does CPC stand for in professional driver training?",
    answers: ["Certificate of Professional Competence", "Commercial Passenger Certificate", "Certified Professional Course", "Commercial Proficiency Certificate"],
    correct: 0,
    explanation: "CPC stands for Certificate of Professional Competence. It is a mandatory qualification for professional HGV and bus drivers in the UK, introduced under EU Directive 2003/59/EC."
  },
  {
    category: "cpc-mixed",
    question: "How many hours of periodic CPC training must a driver complete every 5 years?",
    answers: ["21 hours", "28 hours", "35 hours", "42 hours"],
    correct: 2,
    explanation: "Drivers must complete 35 hours of periodic CPC training every 5 years to maintain their qualification. This is typically done in 7-hour blocks at an approved training centre."
  },
  {
    category: "cpc-mixed",
    question: "What is the maximum weight of a standard artic in the UK?",
    answers: ["38 tonnes", "40 tonnes", "44 tonnes", "50 tonnes"],
    correct: 2,
    explanation: "The maximum permitted weight for a standard articulated lorry (artic) in the UK is 44 tonnes. This applies to vehicles with 6 or more axles on qualifying routes."
  },
  {
    category: "cpc-mixed",
    question: "Who is responsible for ensuring a driver has a valid CPC?",
    answers: ["The driver only", "The employer only", "Both driver and employer", "DVLA only"],
    correct: 2,
    explanation: "Both the driver and the employer share responsibility for ensuring CPC qualifications are valid. Employers must not allow a driver without a valid CPC to operate a vehicle that requires one."
  },
  {
    category: "cpc-mixed",
    question: "What does eco-driving primarily help reduce?",
    answers: ["Journey time", "Fuel consumption and emissions", "Speed", "Tyre wear only"],
    correct: 1,
    explanation: "Eco-driving techniques — such as smooth acceleration, anticipating traffic, and maintaining steady speeds — primarily reduce fuel consumption and CO2 emissions, lowering running costs and environmental impact."
  },
  {
    category: "cpc-mixed",
    question: "What is a 'prohibition notice'?",
    answers: ["A speeding fine", "An order stopping a vehicle from being used", "A parking ticket", "A route restriction"],
    correct: 1,
    explanation: "A prohibition notice is issued by a DVSA enforcement officer when a vehicle is found to have a serious defect or safety issue. The vehicle cannot be driven until the issue is rectified and the prohibition is lifted."
  },
  {
    category: "cpc-mixed",
    question: "What must a driver carry at all times while on duty?",
    answers: ["Passport", "Driver CPC card and driving licence", "Vehicle logbook", "Insurance certificate"],
    correct: 1,
    explanation: "Drivers must carry their Driver CPC card (DCPC card) and their driving licence at all times when on duty. Enforcement officers can request to see both during a roadside check."
  },
  {
    category: "cpc-mixed",
    question: "What is the role of DVSA?",
    answers: ["Issue licences only", "Enforce road safety and vehicle standards", "Manage road tax", "Plan road infrastructure"],
    correct: 1,
    explanation: "The Driver and Vehicle Standards Agency (DVSA) is responsible for improving road safety in Great Britain by setting standards for driving and motorcycling, and enforcing standards for vehicles and their drivers."
  },
  {
    category: "cpc-mixed",
    question: "How long does an initial Driver CPC qualification last before periodic training begins?",
    answers: ["1 year", "3 years", "5 years", "10 years"],
    correct: 2,
    explanation: "The initial Driver CPC is valid for 5 years. After this, the driver must complete 35 hours of periodic training within each subsequent 5-year period to maintain the qualification."
  },
  {
    category: "cpc-mixed",
    question: "What should a driver do when involved in an accident?",
    answers: ["Drive away if damage is minor", "Stop, exchange details and report if required", "Only report if someone is injured", "Continue and report later"],
    correct: 1,
    explanation: "By law, a driver must stop at the scene of an accident, exchange details with other parties involved, and report the incident to the police if required (e.g. if there is injury or the other party does not stop)."
  }
];
