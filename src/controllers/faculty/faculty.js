import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

const facultyListPage = (req, res) => {
    const validSorts = ['name', 'department', 'title'];
    const currentSort = validSorts.includes(req.query.sort) ? req.query.sort : 'name';
    const facultyList = getSortedFaculty(currentSort);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: facultyList,
        currentSort
    });
};

const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const member = getFacultyById(facultyId);

    if (!member) {
        const err = new Error(`Faculty member "${facultyId}" not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: member.name,
        member
    });
};

export { facultyListPage, facultyDetailPage };