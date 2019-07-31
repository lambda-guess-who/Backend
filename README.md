CURRENT ENDPOINTS

REQUIRE PASS,PORT,JWT_SECRET ENV Variables

[] GET /

[] GET /amIAuthed

//////////////////////////

[] GET /api/auth

[] POST /api/auth/login {username: String, password: String}

[] POST /api/auth/register {username: String, password: String}

//////////////////////////

[] GET /api/tweet/

[] GET /api/tweet/:id

[] GET /api/tweet/last/:id

[] POST /api/tweet/

[] DELETE /api/tweet/:id

/////////////////////////

[] PUT /api/user/highscore/:id { highscore : Number}
