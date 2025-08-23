let sno = 0;
        document.getElementById("submit1").addEventListener("click", (e) => {
            e.preventDefault();
            sno++;

            let title1 = document.getElementById("title").value.trim();
            let desc = document.getElementById("desc").value.trim();

            if (!title1 || !desc) {
                alert("Please enter the Section");
                return;
            }
            localStorage.setItem("todo-" + sno, JSON.stringify({ title: title1, desc: desc }));

            let s = document.createElement("div");
            s.textContent = `${sno} → Title: ${title1},  Desc: ${desc}`
            s.setAttribute("id", "note-" + sno); // add id to find it later

            document.getElementById("message").append(s)

            document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
            console.log(e)
        });


        document.getElementById("deletebtn").addEventListener("click", (e) => {
            // sno=1;
            if (sno > 0) {
                localStorage.removeItem("todo-" + sno)


                // remove from UI
                let lastNote = document.getElementById("note-" + sno);
                if (lastNote) lastNote.remove();
                sno--;
            }
            else {
                alert("No notes to delete")
            }

        });

        // load notes on referesh
        window.addEventListener("load", () => {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (key.startsWith("todo-")) {
                    let id = key.split("-")[1];
                    let { title, desc } = JSON.parse(localStorage.getItem(key));

                    let s = document.createElement("div");
                    s.textContent = `${sno} → Title: ${title1},  Desc: ${desc}`;
                    s.setAttribute("id","note-"+id);
                    document.getElementById("message").append(s);

                    sno=Math.max(sno,parseInt(id));
                }
            }
        });