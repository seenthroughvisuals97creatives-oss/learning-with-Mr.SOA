/* =============================================================
   auth-classroom.js
   STATUS: STUB — not yet connected. Nothing in here runs until
   this file is uncommented in mr-soa-chemistry-classroom.html
   (search that file for "auth-classroom.js" to find the line).

   PURPOSE: this file, and only this file, should ever talk to
   Firebase. The main page's JavaScript never checks a code itself —
   it only asks this file "is this student allowed in?" and reacts
   to the answer. That keeps the security logic in one place.

   ELEMENT IDs THIS FILE WILL READ / CONTROL
   (already present in mr-soa-chemistry-classroom.html, currently
   disabled — this file is what enables them):
     #access-code-input        <input>  the code the student types
     #toggle-code-visibility   <button> the eye icon (already wired
                                         up — do not duplicate that
                                         part, it just needs the
                                         input's `disabled` removed)
     #activate-btn             <button> triggers verifyAccessCode()
     .activation-status        <p>      status text shown above
                                         the input — update its
                                         textContent, don't replace
                                         the element

   WHAT THIS FILE STILL NEEDS TO BUILD (see the staged plan you
   already have for the full picture):

   1. Firebase config + initialization
      - Same pattern as World Within's firebase-init.js: import
        initializeApp, getAuth, getFirestore from the Firebase SDK.
      - Needs its OWN Firebase project (or its own collections in
        an existing one) — students, attendance, classCodes,
        classroomSettings, per the plan already agreed.

   2. Student registration (email + password via Firebase Auth)
      - On success: create a Firestore doc in `students` with
        registeredAt, name, email — status: "registered".
      - Classroom resources stay locked at this point. Registering
        is not the same as being let in.

   3. verifyAccessCode(code) — called by #activate-btn
      - Look up the code in the `classCodes` collection.
      - Check: does it exist, is it active, does it belong to this
        student, has it expired? All four, not just "does it exist."
      - On success:
          - Write an `attendance` record (studentId, name, email,
            classCode, enteredAt — a real timestamp).
          - Update `.activation-status` to something warm, e.g.
            "✓ Classroom Access Activated — Welcome to Mr. SOA's
            Classroom."
          - Reveal the protected resources (Google Classroom link,
            lessons, assignments) — these should not just be
            hidden with CSS; they genuinely should not be in the
            page's usable interface until this point.
      - On failure: show the specific reason in plain language
        ("invalid, expired, or not assigned to this account") and
        change nothing else. Never say "activated" unless Firebase
        actually confirmed it.

   4. Firestore Security Rules (not in this file, but required)
      - The real protection has to live in Firebase's rules, not
        just in this JavaScript. Anyone can read a website's JS.
        Hiding a button is a UI nicety, not a lock.

   5. Later, not urgent yet: a small admin view for Mr. SOA to
      generate/deactivate codes and see who's registered — this
      can be its own separate page once the above is solid.
============================================================= */

// Nothing runs yet — this file is intentionally inert until built out.
