import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Sort options shown on the list page (used to highlight the active link)
const validSortFields = ['name', 'department', 'title'];

// Route handler for the faculty list page
const facultyListPage = async (req, res) => {
    const currentSort = validSortFields.includes(req.query.sort) ? req.query.sort : 'name';
    const facultyList = await getSortedFaculty(currentSort);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: facultyList,
        currentSort
    });
};

// Route handler for individual faculty detail pages
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultyId;
    const facultyMember = await getFacultyBySlug(facultySlug);

    // The model returns an empty object when no faculty member is found
    if (Object.keys(facultyMember).length === 0) {
        const err = new Error(`Faculty member ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: facultyMember.name,
        member: facultyMember
    });
};

export { facultyListPage, facultyDetailPage };
