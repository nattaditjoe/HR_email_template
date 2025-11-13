import React, { useMemo, useState } from "react";

const TEMPLATES = [
  {
    id: 1,
    stage: "Sourcing & First Contact",
    situation: "First Contact — Inviting Candidate from Search",
    tone: "Polite, warm, professional",
    tags: ["Search", "Outreach", "Invitation"],
    variables: [
      "Candidate Name",
      "Position",
      "Company Name",
      "Relevant Skill/Field",
      "HR Name",
      "Position Title",
    ],
    en: `Subject: Opportunity with {{Company Name}} — {{Position}}

Dear {{Candidate Name}},

I came across your profile and was impressed by your experience in {{Relevant Skill/Field}}.

We currently have an opening for the position of {{Position}} at {{Company Name}}, and I believe your background could be a great fit.

Would you be open to discussing this opportunity further? If so, please let me know your availability or share your updated CV.

Best regards,
{{HR Name}}
{{Position Title}}
{{Company Name}}`,
    th: `เรื่อง: โอกาสร่วมงานกับ {{Company Name}} — ตำแหน่ง {{Position}}

เรียน คุณ{{Candidate Name}},

เราได้เห็นประวัติของคุณและรู้สึกว่าน่าสนใจมาก โดยเฉพาะประสบการณ์ในด้าน {{Relevant Skill/Field}}

เรากำลังมองหาผู้เชี่ยวชาญในสายงาน {{Position}} และจากประสบการณ์ของคุณ เราเชื่อว่าคุณอาจเป็นคนที่เรากำลังค้นหาอยู่

หากคุณ{{Candidate Name}} สนใจร่วมพูดคุยเพิ่มเติม รบกวนแจ้งช่วงเวลาที่สะดวก หรือส่งประวัติอัปเดตกลับมาได้เลยนะคะ

ขอบคุณค่ะ
{{HR Name}}
{{Position Title}}
{{Company Name}}`,
  },
  {
    id: 2,
    stage: "Sourcing & First Contact",
    situation: "Follow-Up — Candidate Didn’t Reply",
    tone: "Gentle reminder",
    tags: ["Follow-Up", "Reminder"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: {{Company Name}} - Following up on our previous message regarding {{Position}}

Dear {{Candidate Name}},

I hope you’re doing well. I wanted to follow up on my previous email about the {{Position}} opportunity at {{Company Name}}.

We’d be happy to share more details if you’re interested. Please let me know if you’re open to a quick chat — or if you’d prefer not to move forward, no problem either way.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: {{Company Name}} - ติดตามอีกครั้งค่ะ เผื่ออีเมลก่อนหน้าเกี่ยวกับตำแหน่ง {{Position}} จะตกหล่นไป

เรียน คุณ{{Candidate Name}},

หวังว่าคุณ{{Candidate Name}} จะสบายดีนะคะ ทางบริษัทขอติดตามอีเมลก่อนหน้านี้เกี่ยวกับตำแหน่ง {{Position}} ที่ {{Company Name}} อีกครั้งค่ะ เนื่องจากยังไม่ได้รับการตอบกลับ จึงเกรงว่าอีเมลอาจตกหล่นไป

หากคุณยังสนใจตำแหน่งนี้ ทางเรายินดีให้ข้อมูลเพิ่มเติม หรือนัดหมายพูดคุยเพิ่มเติมได้เลยนะคะ
แต่หากตอนนี้ยังไม่สะดวก ก็ไม่เป็นไรค่ะ เพียงแจ้งกลับเพื่อให้ทีมทราบก็เพียงพอค่ะ

ขอบคุณมากค่ะ
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 3,
    stage: "Sourcing & First Contact",
    situation: "Candidate Interested — Requesting Resume or Info",
    tone: "Professional, concise",
    tags: ["Resume", "Next Step"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: {{Company Name}} - Next Step — Resume / Additional Details for {{Position}}

Dear {{Candidate Name}},

Thank you for your interest in the {{Position}} role at {{Company Name}}.

To proceed, could you please share your updated CV or portfolio (if available)?

Once received, we’ll review it and follow up on next steps.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: {{Company Name}} - ขั้นตอนถัดไป — ขอข้อมูลเพิ่มเติมสำหรับตำแหน่ง {{Position}}

เรียน คุณ{{Candidate Name}},

ขอบคุณที่ให้ความสนใจในตำแหน่ง {{Position}} กับ {{Company Name}}

เพื่อดำเนินการต่อ รบกวนส่งประวัติการทำงานล่าสุด หรือแฟ้มผลงาน (ถ้ามี) ให้ทางเราด้วยนะคะ

เมื่อได้รับข้อมูลแล้ว ทางเราจะตรวจสอบและแจ้งขั้นตอนถัดไปค่ะ

{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 4,
    stage: "Sourcing & First Contact",
    situation: "Candidate Not Suitable — Polite Decline",
    tone: "Respectful and appreciative",
    tags: ["Decline", "Not Suitable"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: {{Company Name}} - Update on Your Application for {{Position}}

Dear {{Candidate Name}},

Thank you for your interest in the {{Position}} role at {{Company Name}}.

After review, your experience may not fully align with the current requirements.

We truly appreciate your time and interest, and wish you every success in your future career.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: {{Company Name}} - ผลการพิจารณาใบสมัคร ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณมากสำหรับความสนใจในตำแหน่ง {{Position}} กับ {{Company Name}}

หลังจากพิจารณาแล้ว ทางเราพบว่าประสบการณ์ของคุณอาจยังไม่ตรงกับความต้องการของตำแหน่งในขณะนี้

ขอขอบคุณอีกครั้ง และขออวยพรให้คุณประสบความสำเร็จในเส้นทางอาชีพค่ะ

{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 5,
    stage: "Sourcing & First Contact",
    situation: "Candidate Declined — Keeping Door Open",
    tone: "Friendly and positive",
    tags: ["Declined", "Keep in touch"],
    variables: ["Candidate Name", "Company Name", "HR Name"],
    en: `Subject: {{Company Name}} - Thank You for Your Response

Dear {{Candidate Name}},

Thank you for your reply and your kind interest in {{Company Name}}.

We understand your decision and wish you success.

Please feel free to reconnect in the future if your situation changes.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: {{Company Name}} - ขอบคุณที่สละเวลาในการตอบกลับค่ะ

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ตอบกลับและให้ความสนใจใน {{Company Name}} ค่ะ

ทางเราขอเคารพการตัดสินใจของคุณ และหวังว่าจะได้มีโอกาสร่วมงานกันในอนาคตค่ะ

{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 6,
    stage: "Application & Screening",
    situation: "Application Received — Acknowledgment",
    tone: "Warm, appreciative",
    tags: ["Acknowledgment"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Your Application Has Been Received — {{Position}}

Dear {{Candidate Name}},

Thank you for applying for the {{Position}} position at {{Company Name}}.

We’ve received your application and our team is reviewing it.

We’ll reach out once your qualifications have been assessed.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ได้รับใบสมัครของคุณเรียบร้อยแล้ว — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ส่งใบสมัครสำหรับตำแหน่ง {{Position}} กับ {{Company Name}}

ทางทีมกำลังตรวจสอบข้อมูลของคุณ และจะติดต่อกลับเมื่อมีความคืบหน้าค่ะ

{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 7,
    stage: "Application & Screening",
    situation: "Requesting Additional Information",
    tone: "Courteous, clear",
    tags: ["Additional Info"],
    variables: ["Candidate Name", "Position", "specific detail needed", "HR Name"],
    en: `Subject: Additional Information Required — {{Position}}

Dear {{Candidate Name}},

To continue with your application, could you please provide {{specific detail needed}}?

Once received, we’ll proceed immediately.

Thank you,
{{HR Name}}`,
    th: `เรื่อง: ขอข้อมูลเพิ่มเติมสำหรับตำแหน่ง {{Position}}

เรียน คุณ{{Candidate Name}},

เพื่อดำเนินการต่อในการพิจารณาใบสมัคร รบกวนส่งข้อมูลเพิ่มเติมเกี่ยวกับ {{specific detail needed}}

เมื่อได้รับข้อมูลแล้ว ทางเราจะดำเนินการตรวจสอบต่อทันทีค่ะ

{{HR Name}}`,
  },
  {
    id: 8,
    stage: "Application & Screening",
    situation: "Shortlisted for Interview",
    tone: "Positive, congratulatory",
    tags: ["Shortlist", "Interview"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Congratulations — You’ve Been Shortlisted for {{Position}}

Dear {{Candidate Name}},

Congratulations! You’ve been shortlisted for the {{Position}} position at {{Company Name}}.

We’ll contact you soon to schedule your interview.

{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: แจ้งผลการพิจารณาเบื้องต้น — ผ่านเข้าสู่ขั้นตอนสัมภาษณ์
	
เรียน คุณ{{Candidate Name}},
	
ขอแสดงความยินดีที่คุณผ่านการคัดเลือกเบื้องต้นสำหรับตำแหน่ง {{Position}}
	
ทีมงานจะติดต่อเพื่อกำหนดวันสัมภาษณ์ในเร็ว ๆ นี้ค่ะ
	
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 9,
    stage: "Application & Screening",
    situation: "Not Shortlisted",
    tone: "Appreciative, respectful",
    tags: ["Not Shortlisted"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Update on Your Application for {{Position}}

Dear {{Candidate Name}},

Thank you for your interest in {{Company Name}}.

After consideration, we won’t be moving forward with your application at this time.

We wish you success in your future endeavors.

{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ผลการพิจารณาใบสมัครตำแหน่ง {{Position}}

เรียน คุณ{{Candidate Name}},

ขอบคุณที่ให้ความสนใจร่วมงานกับ {{Company Name}}

หลังจากพิจารณา ทางเราขอแจ้งว่าใบสมัครของคุณยังไม่สามารถดำเนินการต่อได้ในขณะนี้

ขออวยพรให้คุณประสบความสำเร็จในอนาคตค่ะ

{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 10,
    stage: "Interview Process",
    situation: "Interview Invitation",
    tone: "Clear, welcoming",
    tags: ["Interview", "Invitation"],
    variables: ["Candidate Name", "Position", "Date", "Time", "Venue or Meeting Link", "HR Name"],
    en: `Subject: Interview Invitation — {{Position}}
Dear {{Candidate Name}},
We’re pleased to invite you to an interview for the {{Position}} position.
Date: {{Date}}
Time: {{Time}}
Location / Link: {{Venue or Meeting Link}}
Please confirm your availability.
Best regards,
{{HR Name}}`,
    th: `เรื่อง: เชิญเข้าร่วมสัมภาษณ์ — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
บริษัทมีความยินดีเชิญคุณเข้าสัมภาษณ์ในตำแหน่ง {{Position}}
วัน/เวลา: {{Date}} {{Time}}
สถานที่ / ลิงก์สัมภาษณ์: {{Venue or Meeting Link}}
กรุณายืนยันการเข้าร่วมโดยตอบกลับค่ะ
{{HR Name}}`,
  },
  {
    id: 11,
    stage: "Interview Process",
    situation: "Interview Reminder",
    tone: "Friendly reminder",
    tags: ["Reminder", "Interview"],
    variables: ["Candidate Name", "Position", "Date", "Time", "HR Name"],
    en: `Subject: Reminder — Your Interview Tomorrow
Dear {{Candidate Name}},
Just a quick reminder about your interview for {{Position}} on {{Date}} at {{Time}}.
Please let us know if you have any issues joining.
{{HR Name}}`,
    th: `เรื่อง: แจ้งเตือนการสัมภาษณ์วันพรุ่งนี้
เรียนคุณ{{Candidate Name}},
ขอแจ้งเตือนการสัมภาษณ์ตำแหน่ง {{Position}} ในวันที่ {{Date}} เวลา {{Time}}
หากมีปัญหาในการเข้าร่วมหรือจำเป็นต้องเลื่อน กรุณาแจ้งให้ทราบค่ะ
{{HR Name}}`,
  },
  {
    id: 12,
    stage: "Interview Process",
    situation: "Reschedule Interview",
    tone: "Polite, flexible",
    tags: ["Reschedule"],
    variables: ["Candidate Name", "Position", "reason", "HR Name"],
    en: `Subject: Rescheduling Your Interview — {{Position}}
Dear {{Candidate Name}},
Due to {{reason}}, we’d like to reschedule your interview.
Please share your availability in the next few days.
Apologies for any inconvenience.
{{HR Name}}`,
    th: `เรื่อง: ขอเลื่อนวันสัมภาษณ์ — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
เนื่องจาก {{reason}} ทางบริษัทจึงขอเลื่อนวันสัมภาษณ์ตำแหน่ง {{Position}} ออกไปก่อน
รบกวนแจ้งช่วงเวลาที่สะดวกภายในไม่กี่วันนี้ค่ะ
{{HR Name}}`,
  },
  {
    id: 13,
    stage: "Interview Process",
    situation: "Candidate No-Show",
    tone: "Polite but firm",
    tags: ["No-Show"],
    variables: ["Candidate Name", "Position", "Date", "HR Name"],
    en: `Subject: Follow-up Regarding Your Interview on {{Date}}
Dear {{Candidate Name}},
We noticed you weren’t able to attend your interview on {{Date}} for the {{Position}} role.
Please let us know if you faced any issues or would like to reschedule.
{{HR Name}}`,
    th: `เรื่อง: ติดตามการสัมภาษณ์ในวันที่ {{Date}}
เรียนคุณ{{Candidate Name}},
ทางบริษัทสังเกตว่าคุณไม่ได้เข้าร่วมการสัมภาษณ์ในวันที่ {{Date}} สำหรับตำแหน่ง {{Position}}
หากมีเหตุสุดวิสัย หรือต้องการเลื่อนวัน กรุณาแจ้งกลับค่ะ
{{HR Name}}`,
  },
  {
    id: 14,
    stage: "Interview Process",
    situation: "Interview Result — Next Round",
    tone: "Positive, congratulatory",
    tags: ["Next Round"],
    variables: ["Candidate Name", "Position", "Date", "Time", "HR Name"],
    en: `Subject: Congratulations — Next Interview Round
Dear {{Candidate Name}},
Congratulations! You’ve passed the first round for {{Position}}.
The next interview is scheduled for {{Date}} at {{Time}}.
{{HR Name}}`,
    th: `เรื่อง: ผ่านเข้าสู่รอบสัมภาษณ์ถัดไป — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
ขอแสดงความยินดีที่คุณผ่านการสัมภาษณ์รอบแรกในตำแหน่ง {{Position}}
นัดสัมภาษณ์รอบถัดไปในวันที่ {{Date}} เวลา {{Time}}
{{HR Name}}`,
  },
  {
    id: 15,
    stage: "Interview Process",
    situation: "Interview Result — Not Selected",
    tone: "Appreciative, respectful",
    tags: ["Not Selected"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Interview Outcome — {{Position}}
Dear {{Candidate Name}},
Thank you for joining the interview for {{Position}}.
After consideration, we’ve decided to proceed with another candidate.
We appreciate your time and wish you success.
{{HR Name}}`,
    th: `เรื่อง: ผลการสัมภาษณ์ — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
ขอบคุณที่เข้าร่วมสัมภาษณ์ในตำแหน่ง {{Position}} กับ {{Company Name}}
หลังพิจารณา ทางเราตัดสินใจเลือกผู้สมัครท่านอื่นในรอบนี้ค่ะ
ขอขอบคุณอีกครั้งและอวยพรให้ประสบความสำเร็จในอนาคตค่ะ
{{HR Name}}`,
  },
  {
    id: 16,
    stage: "Job Offer & Negotiation",
    situation: "Job Offer",
    tone: "Formal, enthusiastic",
    tags: ["Offer"],
    variables: ["Candidate Name", "Position", "Company Name", "Date", "HR Name"],
    en: `Subject: Job Offer from {{Company Name}} — {{Position}}
Dear {{Candidate Name}},
Congratulations! We’re delighted to offer you the {{Position}} position.
Please review the attached offer and confirm your acceptance by {{Date}}.
{{HR Name}}`,
    th: `เรื่อง: ข้อเสนอการจ้างงานจาก {{Company Name}} — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
ขอแสดงความยินดี! ทางบริษัทมีความยินดีเสนอให้คุณเข้าร่วมงานในตำแหน่ง {{Position}}
กรุณายืนยันการตอบรับภายในวันที่ {{Date}} ค่ะ
{{HR Name}}`,
  },
  {
    id: 17,
    stage: "Job Offer & Negotiation",
    situation: "Offer Follow-Up",
    tone: "Gentle reminder",
    tags: ["Offer", "Follow-Up"],
    variables: ["Candidate Name", "Position", "Date", "Deadline", "HR Name"],
    en: `Subject: Follow-Up on Job Offer — {{Position}}
Dear {{Candidate Name}},
I’d like to follow up regarding the offer sent on {{Date}}.
Please confirm your decision by {{Deadline}}.
{{HR Name}}`,
    th: `เรื่อง: ติดตามข้อเสนอการจ้างงาน — ตำแหน่ง {{Position}}
เรียนคุณ{{Candidate Name}},
ทางบริษัทขอติดตามข้อเสนอที่ได้ส่งให้เมื่อวันที่ {{Date}} สำหรับตำแหน่ง {{Position}}
กรุณาแจ้งการตัดสินใจภายในวันที่ {{Deadline}} ค่ะ
{{HR Name}}`,
  },
  {
    id: 18,
    stage: "Job Offer & Negotiation",
    situation: "Offer Accepted",
    tone: "Warm, welcoming",
    tags: ["Offer", "Accepted"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Welcome to {{Company Name}}!
Dear {{Candidate Name}},
We’re thrilled to confirm your acceptance for {{Position}}.
Our onboarding team will follow up with next steps.
Welcome aboard!
{{HR Name}}`,
    th: `เรื่อง: ยินดีต้อนรับสู่ {{Company Name}}
เรียนคุณ{{Candidate Name}},
ขอบคุณที่ตอบรับข้อเสนอในตำแหน่ง {{Position}}
ทีมงานจะติดต่อแจ้งรายละเอียดการเริ่มงานต่อไปค่ะ
ยินดีต้อนรับสู่ทีมค่ะ
{{HR Name}}`,
  },
  {
    id: 19,
    stage: "Job Offer & Negotiation",
    situation: "Offer Declined",
    tone: "Respectful, positive",
    tags: ["Offer", "Declined"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Thank You and Best Wishes
Dear {{Candidate Name}},
Thank you for letting us know your decision.
We respect your choice and appreciate your interest.
Wishing you success ahead.
{{HR Name}}`,
    th: `เรื่อง: ขอบคุณและขออวยพรให้ประสบความสำเร็จค่ะ
เรียนคุณ{{Candidate Name}},
ขอบคุณที่แจ้งการตัดสินใจเกี่ยวกับข้อเสนอในตำแหน่ง {{Position}}
ทางเราขอเคารพการตัดสินใจและขอบคุณที่ให้ความสนใจใน {{Company Name}}
ขออวยพรให้คุณประสบความสำเร็จค่ะ
{{HR Name}}`,
  },
  {
    id: 20,
    stage: "Onboarding & Post-Hire",
    situation: "Welcome Email (Before Start Date)",
    tone: "Warm, organized",
    tags: ["Welcome", "Onboarding"],
    variables: ["Candidate Name", "Position", "Start Date", "HR Name", "Company Name"],
    en: `Subject: Welcome to the Team — {{Company Name}}
Dear {{Candidate Name}},
We’re excited to have you join as {{Position}}, starting on {{Start Date}}.
Please bring required documents as listed in the attachment.
{{HR Name}}`,
    th: `เรื่อง: ยินดีต้อนรับสู่ทีม — {{Company Name}}
เรียนคุณ{{Candidate Name}},
ยินดีต้อนรับคุณเข้าร่วมงานในตำแหน่ง {{Position}} โดยจะเริ่มงานในวันที่ {{Start Date}}
กรุณานำเอกสารตามที่แนบมาพร้อมมาด้วยค่ะ
{{HR Name}}`,
  },
  {
    id: 21,
    stage: "Onboarding & Post-Hire",
    situation: "Candidate Didn’t Show on First Day",
    tone: "Concerned but professional",
    tags: ["No-Show", "First Day"],
    variables: ["Candidate Name", "Start Date", "HR Name"],
    en: `Subject: Follow-Up on Your Start Date
Dear {{Candidate Name}},
We noticed you weren’t able to join on your scheduled start date.
We hope everything is fine — please let us know your situation.
{{HR Name}}`,
    th: `เรื่อง: ติดตามการรายงานตัววันแรกของการทำงาน
เรียนคุณ{{Candidate Name}},
ทางบริษัทสังเกตว่าคุณไม่ได้เข้ามารายงานตัวในวันที่ {{Start Date}}
หวังว่าทุกอย่างเรียบร้อยดี หากมีเหตุจำเป็นกรุณาแจ้งกลับค่ะ
{{HR Name}}`,
  },
  {
    id: 22,
    stage: "Re-Engagement & Talent Pool",
    situation: "Reconnect with Past Candidate",
    tone: "Friendly, open",
    tags: ["Reconnect", "Talent Pool"],
    variables: ["Candidate Name", "Position", "Company Name", "HR Name"],
    en: `Subject: Reconnecting for a New Opportunity — {{Company Name}}
Dear {{Candidate Name}},
I hope you’re doing well. We currently have a new opportunity for {{Position}} that aligns with your background.
Would you be interested in discussing this role?
{{HR Name}}`,
    th: `เรื่อง: โอกาสใหม่จาก {{Company Name}}
เรียนคุณ{{Candidate Name}},
หวังว่าคุณจะสบายดีนะคะ ขณะนี้บริษัทมีตำแหน่ง {{Position}} เปิดรับ ซึ่งคิดว่าน่าจะเหมาะกับประสบการณ์ของคุณ
หากสนใจ รบกวนแจ้งกลับมาได้เลยค่ะ
{{HR Name}}`,
  },
];

const stages = Array.from(new Set(TEMPLATES.map((t) => t.stage)));
const tones = Array.from(new Set(TEMPLATES.map((t) => t.tone)));

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceVars(text, values) {
  let out = text || "";
  Object.entries(values).forEach(([key, val]) => {
    const re = new RegExp(`{{\\s*${escapeRegex(key)}\\s*}}`, "g");
    out = out.replace(re, val || `{{${key}}}`);
  });
  return out;
}

export default function HRTemplateLibrary() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState("All");
  const [tone, setTone] = useState("All");
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState(TEMPLATES[0]);
  const [values, setValues] = useState({
    "Candidate Name": "Alex",
    Position: "Marketing Manager",
    "Company Name": "Acme Co.",
    "HR Name": "HR Team",
    "Position Title": "Talent Acquisition Partner",
    "Relevant Skill/Field": "digital marketing",
    Date: "12 Nov 2025",
    Time: "10:00 AM",
    "Venue or Meeting Link": "Google Meet",
    reason: "a schedule change",
    "Start Date": "1 Dec 2025",
    Deadline: "15 Nov 2025",
    "specific detail needed": "your expected salary and notice period",
  });

  const filtered = useMemo(
    () =>
      TEMPLATES.filter(
        (t) =>
          (stage === "All" || t.stage === stage) &&
          (tone === "All" || t.tone === tone) &&
          (query.trim() === "" ||
            t.situation.toLowerCase().includes(query.toLowerCase()) ||
            (t.tags || []).some((tag) => tag.toLowerCase().includes(query.toLowerCase())))
      ),
    [query, stage, tone]
  );

  const rendered = useMemo(() => replaceVars(active?.[lang], values), [active, lang, values]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rendered);
      alert("Copied to clipboard");
    } catch (e) {
      alert("Copy failed. Select and copy manually.");
    }
  };

  const VarInput = ({ label }) => (
    <div className="flex flex-col">
      <label className="text-xs text-neutral-600 mb-1">{label}</label>
      <input
        className="border rounded-lg px-3 py-2"
        value={values[label] || ""}
        onChange={(e) => setValues((prev) => ({ ...prev, [label]: e.target.value }))}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <header className="lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Universal HR Email Template Library</h1>
              <p className="text-sm text-neutral-600 mt-1">Bilingual • Modern formal • Plug-and-send</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm">Language</label>
              <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded-lg px-3 py-2">
                <option value="en">English</option>
                <option value="th">ไทย</option>
              </select>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              className="border rounded-xl px-4 py-3 md:col-span-2"
              placeholder="Search situations, e.g., no-show, interview, offer"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select className="border rounded-xl px-4 py-3" value={stage} onChange={(e) => setStage(e.target.value)}>
              <option>All</option>
              {stages.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select className="border rounded-xl px-4 py-3" value={tone} onChange={(e) => setTone(e.target.value)}>
              <option>All</option>
              {tones.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </header>

        <aside className="lg:col-span-1 bg-white rounded-2xl shadow-sm border p-4">
          <h2 className="text-lg font-semibold mb-3">Templates</h2>
          <div className="space-y-2 max-h-[70vh] overflow-auto pr-1">
            {filtered.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t)}
                className={`w-full text-left p-3 rounded-xl border transition ${
                  active?.id === t.id ? "bg-neutral-100 border-neutral-300" : "hover:bg-neutral-50"
                }`}
              >
                <div className="text-sm text-neutral-500">{t.stage}</div>
                <div className="font-medium">{t.situation}</div>
                <div className="text-xs text-neutral-500 mt-1">Tone: {t.tone}</div>
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-4 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Preview</h2>
              <p className="text-sm text-neutral-600">Live-rendered with your variables</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleCopy} className="px-4 py-2 rounded-xl bg-black text-white">
                Copy
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border rounded-xl p-4 bg-neutral-50 whitespace-pre-wrap text-sm">{rendered}</div>
            <div className="border rounded-xl p-4 space-y-4">
              <h3 className="font-medium">Variables</h3>

              <div className="rounded-lg border p-3 bg-neutral-50">
                <div className="text-xs text-neutral-600 mb-2">Global (applies to every template)</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <VarInput label="HR Name" />
                  <VarInput label="Company Name" />
                  <VarInput label="Position Title" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {(active?.variables || [])
                  .filter((v) => !["HR Name", "Company Name", "Position Title"].includes(v))
                  .map((v) => (
                    <VarInput key={v} label={v} />
                  ))}
              </div>
            </div>
          </div>

          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-neutral-600">Show raw template with placeholders</summary>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
              <textarea readOnly className="border rounded-xl p-3 h-56 text-sm" value={active?.en || ""} />
              <textarea readOnly className="border rounded-xl p-3 h-56 text-sm" value={active?.th || ""} />
            </div>
          </details>
        </main>
      </div>

      <footer className="max-w-7xl mx-auto mt-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Universal HR Templates • v1.0
      </footer>
    </div>
  );
}
