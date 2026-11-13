# SAS Psychology Experiment — Vercel edition

This project is the Vercel-compatible deployment for the seven-question anonymous framing study.

## Important: upload the updated version, not the old Netlify files

The root of your GitHub repository must contain:

```
api/
  [action].js
  core.mjs
public/
  index.html
  app.js
  content.js
  questionnaire.css
  researcher.html
  researcher.js
  styles.css
database/
  schema.sql
  enable_response_deletion.sql
tests/
  final.test.mjs
package.json
vercel.json
README.md
```

Remove obsolete `netlify.toml` and the old `netlify/` folder from GitHub. Don't upload the ZIP as one file; extract it, and drag the folders/files to GitHub while preserving paths. If you're updating an existing repository, **replace** the old `public/` files rather than leaving conflicting versions in the root.

## Deploy to Vercel

1. Import your GitHub repository on Vercel, or use your existing linked project.
2. Ensure **Root Directory** is the repository root (not `public`). Framework preset: **Other**. Build command: none. Output directory: `public` (also configured in `vercel.json`).
3. In Vercel > Project > Settings > Environment Variables add the following to Production, never to GitHub:

   - `SUPABASE_URL`: `https://your-project.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY`: Supabase **Secret** key (`sb_secret_...`) or legacy `service_role` key. The code supports either, despite the retained variable name.
   - `RESEARCHER_PASSWORD`: long, unique password for `/researcher.html`
   - `RESEARCHER_SESSION_SECRET`: random, private string at least 32 characters long, separate from researcher password.

4. In Supabase > SQL Editor, run `database/schema.sql` for a fresh project. **If you already ran the previous schema, only run `database/enable_response_deletion.sql`** to enable the new deletion feature. Do not re-run the full schema to apply this small update.
5. Commit the replacement files in GitHub, and deploy/redeploy via Vercel > Deployments.
6. Open `https://your-site.vercel.app/` for participants, and `https://your-site.vercel.app/researcher.html` for the password-protected researcher dashboard.

## Test before giving to students

1. Open the participant site on two **separate private browser windows/devices**. Agree to participate and start each questionnaire. Complete both, then check dashboard allocation counts and responses. Note the first version assignment isn't shown to students.
2. Repeat with 10 starts: assignment totals must be 5 for A and 5 for B. Odd totals differ by one. The dashboard counts *all historical allocations*, including withdrawn sessions, to preserve fair allocation across starts. Completed response totals can differ due to dropouts.
3. Check researcher login, CSV export, completed responses, and withdrawal. Test the **Delete** button on one disposable record, confirm that it disappears from the dashboard and CSV, and confirm that the historical assignment counts do not change. The final 400-student trip is 100 attend / 300 miss, with 1/4 versus 3/4 chance. The 600-student concert is 200 attend / 400 miss, with 1/3 versus 2/3 chance.
4. Before real data collection, remove all trial responses and reset the assignment table **only if your school authorizes a fresh start**. A clean-reset SQL script is not included to avoid accidentally deleting real data. Contact a supervisor or make a backup if needed.
5. Obtain appropriate school/guardian permissions for research involving students. Participation is voluntary and anonymous (but anonymous IDs are stored in each browser to allow continuation and withdrawal).

## Troubleshooting

- Site loads but Begin fails: open Vercel > your project > Logs > Functions. Check environment variables, then verify Supabase SQL was executed. Do not send secrets/screenshots revealing values.
- `/api/start` in a browser may return `Not found` because the endpoint requires **POST**; this doesn't mean it's broken.
- 404 at `/`: ensure `public/index.html` is uploaded and the Vercel project root is the repository root.
- 404 at `/api/…`: ensure `api/[action].js` and `api/core.mjs` are uploaded to the **root** of the repository.
- After changing Vercel environment variables, **redeploy** so the server functions receive new settings.

## Privacy / reliability

- The study does not request names, emails or student IDs. The server stores responses under anonymous UUIDs. IP metadata may still be processed in normal hosting logs; avoid claiming total network anonymity.
- Results are accessible only from the server-side password-protected research endpoints; keep credentials private.
- Balance is guaranteed for successful *assignments* under the transaction lock in `start_study`, not for completed questionnaires. Exactly equal groups are possible only with an even total number of assigned participants.
- No live hosted endpoint or live Supabase account has been tested by the creator of this ZIP. Run the above trial before distributing the URL.

## Local checks

From the extracted project directory: `npm test`.

## Delete an individual response

After signing in to `/researcher.html`, scroll to **Anonymous responses**, then click **Delete** on a row and confirm the warning. Deletion is permanent and removes that session and its answers from the database and CSV. Only a researcher with a valid signed login session can invoke the delete endpoint. The historical count of *versions assigned* is retained, so the 50/50 allocation procedure is not distorted by deletion. The numbers of completed responses may no longer be equal.

**For existing databases:** run `database/enable_response_deletion.sql` once using Supabase SQL Editor before using the Delete button; this creates the privileged deletion RPC. The SQL intentionally does not grant access to anonymous browser clients.
