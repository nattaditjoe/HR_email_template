
export const TEMPLATES = [
  // Phase 1
  {
    id: 1,
    stage: "Sourcing & First Contact",
    situation: "First Contact — Inviting Candidate from Search",
    tone: "Polite, warm, professional",
    tags: ["invite", "search", "first contact"],
    variables: ["Candidate Name", "Position", "Company Name", "Relevant Skill/Field"],
    en: `Subject: Opportunity with {{Company Name}} — {{Position}}

Dear {{Candidate Name}},

I came across your profile and was impressed by your experience in {{Relevant Skill/Field}}.

We currently have an opening for the position of **{{Position}}** at **{{Company Name}}**, and I believe your background could be a great fit.

Would you be open to discussing this opportunity further? If so, please let me know your availability or share your updated CV.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: โอกาสร่วมงานกับ {{Company Name}} — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ทางบริษัทได้เห็นประวัติของคุณและประทับใจในประสบการณ์ด้าน {{Relevant Skill/Field}}

ขณะนี้บริษัทมีตำแหน่ง **{{Position}}** เปิดรับอยู่ ซึ่งตรงกับความเชี่ยวชาญของคุณเป็นอย่างดี

หากคุณสนใจร่วมพูดคุยเพิ่มเติม รบกวนแจ้งช่วงเวลาที่สะดวก หรือส่งประวัติอัปเดตกลับมาได้เลยนะคะ

ขอบคุณค่ะ
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 2,
    stage: "Sourcing & First Contact",
    situation: "Follow-Up — Candidate Didn’t Reply",
    tone: "Gentle reminder",
    tags: ["follow-up", "reminder"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Following up on our previous message regarding {{Position}}

Dear {{Candidate Name}},

I hope you’re doing well. I wanted to follow up on my previous email about the **{{Position}}** opportunity at **{{Company Name}}**.

We’d be happy to share more details if you’re interested. Please let me know if you’re open to a quick chat — or if you’d prefer not to move forward, no problem either way.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ติดตามโอกาสงานตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

หวังว่าคุณจะสบายดีนะคะ ทางบริษัทขอติดตามอีเมลก่อนหน้านี้เกี่ยวกับตำแหน่ง **{{Position}}** ที่ **{{Company Name}}**

หากคุณสนใจ ทางเรายินดีให้ข้อมูลเพิ่มเติมได้เลยค่ะ แต่หากตอนนี้ยังไม่สะดวกก็ไม่เป็นไรนะคะ รบกวนแจ้งกลับได้เลยค่ะ

ขอบคุณมากค่ะ
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 3,
    stage: "Sourcing & First Contact",
    situation: "Candidate Interested — Requesting Resume or More Info",
    tone: "Professional, concise",
    tags: ["resume", "next step"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Next Step — Resume / Additional Details for {{Position}}

Dear {{Candidate Name}},

Thank you for your interest in the **{{Position}}** role at **{{Company Name}}**.

To proceed with your application, could you please share your updated CV or portfolio (if available)?

Once we receive your information, we’ll review it and get back to you regarding the next steps.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ขั้นตอนถัดไป — ขอข้อมูลเพิ่มเติมสำหรับตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ให้ความสนใจในตำแหน่ง **{{Position}}** กับ **{{Company Name}}**

เพื่อดำเนินการต่อ รบกวนส่งประวัติการทำงานล่าสุด หรือแฟ้มผลงาน (ถ้ามี) ให้ทางเราด้วยนะคะ

เมื่อได้รับข้อมูลแล้ว ทางเราจะรีบดำเนินการตรวจสอบและแจ้งขั้นตอนต่อไปค่ะ

ขอบคุณมากค่ะ
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 4,
    stage: "Sourcing & First Contact",
    situation: "Candidate Not Suitable — Polite Decline After Review",
    tone: "Respectful and appreciative",
    tags: ["decline", "not suitable"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Update on Your Application for {{Position}}

Dear {{Candidate Name}},

Thank you very much for your interest in the **{{Position}}** role at **{{Company Name}}**.

After reviewing your profile, we believe that your experience may not fully align with the current requirements for this role.

We truly appreciate the time you took to connect with us and wish you every success.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ผลการพิจารณาใบสมัคร ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณมากสำหรับความสนใจในตำแหน่ง **{{Position}}** กับ **{{Company Name}}**

หลังจากพิจารณาข้อมูลแล้ว ทางเราพบว่าประสบการณ์ของคุณอาจยังไม่ตรงกับความต้องการของตำแหน่งนี้ในขณะนี้

อย่างไรก็ตาม ขอขอบคุณอีกครั้งที่สละเวลา และขออวยพรให้คุณประสบความสำเร็จในเส้นทางอาชีพต่อไปค่ะ

ด้วยความนับถือ,
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 5,
    stage: "Sourcing & First Contact",
    situation: "Candidate Declined — Keeping Door Open",
    tone: "Positive, future-oriented",
    tags: ["declined", "keep in touch"],
    variables: ["Candidate Name", "Company Name"],
    en: `Subject: Thank You for Your Response

Dear {{Candidate Name}},

Thank you for getting back to us and for your interest in **{{Company Name}}**.

We understand your decision and truly appreciate your kind response.

Should your situation change or if you’d like to explore future opportunities, please don’t hesitate to reach out — we’d be glad to reconnect.

Best wishes,
{{HR Name}}`,
    th: `เรื่อง: ขอบคุณที่สละเวลาในการตอบกลับค่ะ

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ตอบกลับและให้ความสนใจในบริษัท **{{Company Name}}** ค่ะ

ทางเราเข้าใจและเคารพการตัดสินใจของคุณเป็นอย่างดี

หากในอนาคตมีโอกาสที่เหมาะสมหรือคุณสนใจร่วมงานกับเราอีกครั้ง สามารถติดต่อกลับมาได้ทุกเมื่อค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },

  // Phase 2
  {
    id: 6,
    stage: "Application & Screening",
    situation: "Application Received — Acknowledgment",
    tone: "Warm, appreciative",
    tags: ["acknowledge", "application"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Your Application Has Been Received — {{Position}}

Dear {{Candidate Name}},

Thank you for applying for the **{{Position}}** position at **{{Company Name}}**.

We’ve received your application and our recruitment team is currently reviewing it.

We’ll contact you once your qualifications have been assessed, or if we need additional information.

Best regards,
{{HR Name}}
{{Company Name}}`,
    th: `เรื่อง: ได้รับใบสมัครของคุณเรียบร้อยแล้ว — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ส่งใบสมัครสำหรับตำแหน่ง **{{Position}}** กับ **{{Company Name}}**

ทางทีมสรรหากำลังตรวจสอบข้อมูลของคุณ และจะติดต่อกลับเมื่อมีความคืบหน้า หรือหากต้องการข้อมูลเพิ่มเติมค่ะ

ด้วยความนับถือ,
{{HR Name}}
{{Company Name}}`,
  },
  {
    id: 7,
    stage: "Application & Screening",
    situation: "Requesting Additional Information",
    tone: "Courteous and concise",
    tags: ["additional info", "follow-up"],
    variables: ["Candidate Name", "Position", "specific details needed"],
    en: `Subject: Additional Information Required — {{Position}}

Dear {{Candidate Name}},

To proceed with your application for the **{{Position}}**, could you kindly provide {{specific details needed}}?

Once we receive this, we’ll continue with the evaluation process.

Thank you for your prompt response.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ขอข้อมูลเพิ่มเติมสำหรับตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

เพื่อดำเนินการต่อในการพิจารณาใบสมัครตำแหน่ง **{{Position}}** รบกวนช่วยส่งข้อมูลเพิ่มเติมเกี่ยวกับ {{specific details needed}}

เมื่อได้รับข้อมูลแล้ว ทางเราจะดำเนินการตรวจสอบต่อทันทีค่ะ

ขอบคุณล่วงหน้าค่ะ
{{HR Name}}`,
  },
  {
    id: 8,
    stage: "Application & Screening",
    situation: "Shortlisted for Interview",
    tone: "Positive and encouraging",
    tags: ["shortlist", "interview"],
    variables: ["Candidate Name", "Position"],
    en: `Subject: Congratulations — You’ve Been Shortlisted for {{Position}}

Dear {{Candidate Name}},

After reviewing your profile, we’re pleased to inform you that you’ve been shortlisted for the **{{Position}}** position at our company.

Our team will contact you shortly to schedule the interview.

Congratulations again, and we look forward to speaking with you soon.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: แจ้งผลการพิจารณาเบื้องต้น — ผ่านเข้าสู่ขั้นตอนสัมภาษณ์

เรียนคุณ{{Candidate Name}},

หลังจากตรวจสอบใบสมัครของคุณแล้ว ทางบริษัทมีความยินดีที่จะแจ้งว่าคุณผ่านการคัดเลือกเบื้องต้นสำหรับตำแหน่ง **{{Position}}**

ทางทีมจะติดต่อเพื่อกำหนดวันและเวลาสัมภาษณ์ในเร็ว ๆ นี้ค่ะ

ขอแสดงความยินดีและหวังว่าจะได้พูดคุยกันเร็ว ๆ นี้ค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },
  {
    id: 9,
    stage: "Application & Screening",
    situation: "Not Shortlisted",
    tone: "Appreciative and professional",
    tags: ["not shortlisted"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Update on Your Application for {{Position}}

Dear {{Candidate Name}},

Thank you for your interest in joining **{{Company Name}}**.

After careful consideration, we regret to inform you that your application for the **{{Position}}** role will not be moving forward at this time.

We truly appreciate the time and effort you invested and wish you every success in your career.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ผลการพิจารณาใบสมัครตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ให้ความสนใจร่วมงานกับ **{{Company Name}}**

หลังจากพิจารณาอย่างรอบคอบ ทางเราขอแจ้งว่าใบสมัครของคุณในตำแหน่ง **{{Position}}** ยังไม่สามารถดำเนินการต่อได้ในขณะนี้

ขอขอบคุณสำหรับเวลาที่คุณสละให้ และขออวยพรให้ประสบความสำเร็จในอนาคตค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },

  // Phase 3
  {
    id: 10,
    stage: "Interview Process",
    situation: "Interview Invitation",
    tone: "Clear, welcoming, and informative",
    tags: ["interview", "invite"],
    variables: ["Candidate Name", "Position", "Date", "Time", "Venue or Meeting Link"],
    en: `Subject: Interview Invitation — {{Position}}

Dear {{Candidate Name}},

We’re pleased to invite you to an interview for the **{{Position}}** role.

**Date:** {{Date}}
**Time:** {{Time}}
**Location / Link:** {{Venue or Meeting Link}}

Please confirm your availability by replying to this email.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: เชิญเข้าร่วมสัมภาษณ์ — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ทางบริษัทมีความยินดีเชิญคุณเข้าสัมภาษณ์สำหรับตำแหน่ง **{{Position}}**

**วัน/เวลา:** {{Date}} {{Time}}
**สถานที่ / ลิงก์สัมภาษณ์:** {{Venue or Meeting Link}}

กรุณายืนยันการเข้าร่วมโดยตอบกลับอีเมลนี้ค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },
  {
    id: 11,
    stage: "Interview Process",
    situation: "Interview Reminder",
    tone: "Friendly reminder",
    tags: ["reminder", "interview"],
    variables: ["Candidate Name", "Position", "Date", "Time"],
    en: `Subject: Reminder — Your Interview Tomorrow

Dear {{Candidate Name}},

This is a friendly reminder about your interview for the **{{Position}}** position scheduled on **{{Date}} at {{Time}}**.

Please let us know if you have any issues joining.

Looking forward to meeting you.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: แจ้งเตือนการสัมภาษณ์วันพรุ่งนี้

เรียนคุณ{{Candidate Name}},

ขอแจ้งเตือนการสัมภาษณ์ตำแหน่ง **{{Position}}** ในวันที่ **{{Date}} เวลา {{Time}}**

หากมีปัญหาในการเข้าร่วมหรือจำเป็นต้องเลื่อน กรุณาแจ้งให้ทราบได้เลยค่ะ

ขอบคุณและพบกันวันสัมภาษณ์ค่ะ
{{HR Name}}`,
  },
  {
    id: 12,
    stage: "Interview Process",
    situation: "Reschedule Interview",
    tone: "Polite and flexible",
    tags: ["reschedule", "interview"],
    variables: ["Candidate Name", "Position", "reason"],
    en: `Subject: Rescheduling Your Interview — {{Position}}

Dear {{Candidate Name}},

Due to {{reason}}, we’d like to reschedule your interview for the **{{Position}}** role.

Could you please share your availability within the next few days?

We apologize for any inconvenience and appreciate your understanding.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ขอเลื่อนวันสัมภาษณ์ — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

เนื่องจาก {{reason}} ทางบริษัทจึงขอเลื่อนวันสัมภาษณ์ตำแหน่ง **{{Position}}** ออกไปก่อน

รบกวนแจ้งช่วงเวลาที่คุณสะดวกภายในไม่กี่วันนี้ค่ะ

ขออภัยในความไม่สะดวกและขอบคุณสำหรับความเข้าใจค่ะ
{{HR Name}}`,
  },
  {
    id: 13,
    stage: "Interview Process",
    situation: "Candidate No-Show",
    tone: "Polite but firm",
    tags: ["no-show", "follow-up"],
    variables: ["Candidate Name", "Position", "Date"],
    en: `Subject: Follow-up Regarding Your Interview on {{Date}}

Dear {{Candidate Name}},

We noticed that you weren’t able to attend your interview on {{Date}} for the {{Position}} role.

Please let us know if you faced any issues or would like to reschedule.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ติดตามการสัมภาษณ์ในวันที่ {{Date}}

เรียนคุณ{{Candidate Name}},

ทางบริษัทสังเกตว่าคุณไม่ได้เข้าร่วมการสัมภาษณ์ในวันที่ {{Date}} สำหรับตำแหน่ง {{Position}}

หากมีเหตุสุดวิสัย หรือต้องการเลื่อนวัน กรุณาแจ้งกลับค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },
  {
    id: 14,
    stage: "Interview Process",
    situation: "Interview Result — Next Round",
    tone: "Positive and congratulatory",
    tags: ["result", "next round"],
    variables: ["Candidate Name", "Position", "Date", "Time"],
    en: `Subject: Congratulations — You’ve Been Selected for the Next Interview Round

Dear {{Candidate Name}},

Congratulations! You’ve successfully passed the first interview for the **{{Position}}** position.

We’d like to invite you to the next round on **{{Date}} at {{Time}}**.

Please confirm your attendance.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ผ่านเข้าสู่รอบสัมภาษณ์ถัดไป — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอแสดงความยินดีที่คุณผ่านการสัมภาษณ์รอบแรกสำหรับตำแหน่ง **{{Position}}**

ทางเราขอเชิญเข้าสัมภาษณ์รอบถัดไปในวันที่ **{{Date}} เวลา {{Time}}**

กรุณายืนยันการเข้าร่วมกลับมาค่ะ
{{HR Name}}`,
  },
  {
    id: 15,
    stage: "Interview Process",
    situation: "Interview Result — Not Selected",
    tone: "Appreciative and respectful",
    tags: ["result", "not selected"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Interview Outcome — {{Position}}

Dear {{Candidate Name}},

Thank you for attending the interview for the **{{Position}}** role at **{{Company Name}}**.

After careful consideration, we’ve decided to proceed with another candidate whose background more closely matches the position.

We sincerely appreciate your time and interest, and we wish you every success ahead.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ผลการสัมภาษณ์ — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่สละเวลาเข้าร่วมสัมภาษณ์ในตำแหน่ง **{{Position}}** กับ **{{Company Name}}**

หลังจากพิจารณา ทางเราตัดสินใจเลือกผู้สมัครท่านอื่นที่เหมาะสมกับความต้องการของตำแหน่งในขณะนี้

ขอขอบคุณอีกครั้งและขออวยพรให้คุณประสบความสำเร็จในเส้นทางอาชีพต่อไปค่ะ

{{HR Name}}`,
  },

  // Phase 4
  {
    id: 16,
    stage: "Job Offer & Negotiation",
    situation: "Job Offer",
    tone: "Formal and enthusiastic",
    tags: ["offer", "hire"],
    variables: ["Candidate Name", "Position", "Company Name", "Date"],
    en: `Subject: Job Offer from {{Company Name}} — {{Position}}

Dear {{Candidate Name}},

Congratulations! We’re delighted to offer you the position of **{{Position}}** at **{{Company Name}}**.

Please find the details attached for your review. Kindly confirm your acceptance by {{Date}}.

We look forward to welcoming you to our team.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ข้อเสนอการจ้างงานจาก {{Company Name}} — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ขอแสดงความยินดี! ทางบริษัทมีความยินดีเสนอให้คุณเข้าร่วมงานในตำแหน่ง **{{Position}}**

รายละเอียดแนบมาพร้อมอีเมลนี้ กรุณายืนยันการตอบรับภายในวันที่ {{Date}}

ยินดีต้อนรับล่วงหน้าค่ะ
{{HR Name}}`,
  },
  {
    id: 17,
    stage: "Job Offer & Negotiation",
    situation: "Offer Follow-Up / Reminder",
    tone: "Gentle and professional",
    tags: ["offer", "reminder"],
    variables: ["Candidate Name", "Position", "Company Name", "Date", "Deadline"],
    en: `Subject: Follow-Up on Job Offer — {{Position}}

Dear {{Candidate Name}},

We wanted to follow up regarding the offer sent on {{Date}} for the **{{Position}}** at **{{Company Name}}**.

Please let us know your decision by {{Deadline}}. We’d be glad to clarify any questions you might have.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ติดตามข้อเสนอการจ้างงาน — ตำแหน่ง {{Position}}

เรียนคุณ{{Candidate Name}},

ทางบริษัทขอติดตามข้อเสนอที่ได้ส่งให้เมื่อวันที่ {{Date}} สำหรับตำแหน่ง **{{Position}}**

กรุณาแจ้งการตัดสินใจภายในวันที่ {{Deadline}} หากมีข้อสงสัยสามารถสอบถามได้เลยค่ะ

ขอบคุณค่ะ
{{HR Name}}`,
  },
  {
    id: 18,
    stage: "Job Offer & Negotiation",
    situation: "Offer Accepted",
    tone: "Welcoming and positive",
    tags: ["offer", "accepted"],
    variables: ["Candidate Name", "Position"],
    en: `Subject: Welcome to {{Company Name}}!

Dear {{Candidate Name}},

We’re thrilled to confirm your acceptance for the **{{Position}}** role.

Our onboarding team will contact you shortly with next steps and start-date details.

Welcome aboard!
{{HR Name}}`,
    th: `เรื่อง: ยินดีต้อนรับสู่ {{Company Name}}

เรียนคุณ{{Candidate Name}},

ขอบคุณที่ตอบรับข้อเสนอเข้าร่วมงานในตำแหน่ง **{{Position}}**

ทีมงานจะติดต่อเพื่อแจ้งรายละเอียดการเริ่มงานและขั้นตอนต่อไปเร็ว ๆ นี้ค่ะ

ยินดีต้อนรับสู่ทีมของเราค่ะ
{{HR Name}}`,
  },
  {
    id: 19,
    stage: "Job Offer & Negotiation",
    situation: "Offer Declined",
    tone: "Appreciative and open for future contact",
    tags: ["offer", "declined"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Thank You and Best Wishes

Dear {{Candidate Name}},

Thank you for letting us know your decision regarding the **{{Position}}** offer.

We respect your choice and truly appreciate your interest in **{{Company Name}}**.

Wishing you continued success, and we hope to cross paths again.
{{HR Name}}`,
    th: `เรื่อง: ขอบคุณและขออวยพรให้ประสบความสำเร็จค่ะ

เรียนคุณ{{Candidate Name}},

ขอบคุณที่แจ้งการตัดสินใจเกี่ยวกับข้อเสนอในตำแหน่ง **{{Position}}**

ทางเราขอเคารพการตัดสินใจและขอบคุณที่ให้ความสนใจใน **{{Company Name}}**

ขออวยพรให้คุณประสบความสำเร็จและหวังว่าจะได้ร่วมงานกันในอนาคตค่ะ
{{HR Name}}`,
  },

  // Phase 5
  {
    id: 20,
    stage: "Onboarding & Post-Hire",
    situation: "Welcome Email (Before Start Date)",
    tone: "Warm and organized",
    tags: ["welcome", "onboarding"],
    variables: ["Candidate Name", "Position", "Start Date", "Time", "Location"],
    en: `Subject: Welcome to the Team — {{Company Name}}

Dear {{Candidate Name}},

We’re excited to have you join us as **{{Position}}** starting on **{{Start Date}}**.

Please bring the required documents listed in the attached file and arrive at {{Time/Location}}.

We look forward to starting this journey together.
{{HR Name}}`,
    th: `เรื่อง: ยินดีต้อนรับสู่ทีม — {{Company Name}}

เรียนคุณ{{Candidate Name}},

ทางบริษัทยินดีต้อนรับคุณเข้าร่วมงานในตำแหน่ง **{{Position}}** โดยจะเริ่มงานในวันที่ **{{Start Date}}**

กรุณานำเอกสารตามรายการแนบมาในวันรายงานตัว เวลา {{Time}} ที่ {{Location}}

ยินดีที่ได้ร่วมงานกันค่ะ
{{HR Name}}`,
  },
  {
    id: 21,
    stage: "Onboarding & Post-Hire",
    situation: "Candidate Did Not Show on First Day",
    tone: "Concerned but professional",
    tags: ["no-show", "first day"],
    variables: ["Candidate Name", "Start Date"],
    en: `Subject: Follow-Up on Your Start Date — {{Company Name}}

Dear {{Candidate Name}},

We noticed that you weren’t able to join on your scheduled start date {{Start Date}}.

We hope everything is alright. Please let us know your situation so we can assist or reschedule if appropriate.

Best regards,
{{HR Name}}`,
    th: `เรื่อง: ติดตามการรายงานตัววันแรกของการทำงาน

เรียนคุณ{{Candidate Name}},

ทางบริษัทสังเกตว่าคุณไม่ได้เข้ามารายงานตัวในวันที่ {{Start Date}}

หวังว่าทุกอย่างเรียบร้อยดี หากมีเหตุจำเป็นหรือปัญหาใด ๆ กรุณาแจ้งกลับมาได้เลยค่ะ เพื่อให้ทางเราช่วยประสานได้ค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },

  // Phase 6
  {
    id: 22,
    stage: "Re-Engagement & Talent Pool",
    situation: "Reconnect with Past Candidate",
    tone: "Friendly and personalized",
    tags: ["reconnect", "talent pool"],
    variables: ["Candidate Name", "Position", "Company Name"],
    en: `Subject: Reconnecting for a New Opportunity — {{Company Name}}

Dear {{Candidate Name}},

I hope you’ve been doing well. I’m reaching out as we currently have a new opening for **{{Position}}** which might align with your experience.

Would you be interested in discussing this opportunity?

Best regards,
{{HR Name}}`,
    th: `เรื่อง: โอกาสใหม่จาก {{Company Name}}

เรียนคุณ{{Candidate Name}},

หวังว่าคุณจะสบายดีนะคะ ขณะนี้บริษัทมีตำแหน่ง **{{Position}}** เปิดรับ ซึ่งคิดว่าน่าจะเหมาะกับประสบการณ์ของคุณ

หากคุณสนใจ รบกวนแจ้งกลับได้เลยค่ะ ทางเรายินดีให้ข้อมูลเพิ่มเติมค่ะ

ด้วยความนับถือ,
{{HR Name}}`,
  },
];
