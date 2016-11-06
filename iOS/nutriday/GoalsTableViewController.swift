//
//  GoalsTableViewController.swift
//  nutriday
//
//  Created by Juan Carlos Ferrel on 11/5/16.
//  Copyright © 2016 Juan Carlos Ferrel. All rights reserved.
//

import UIKit

struct nutrition {
    let calories: Int!
    let protein: Int!
    let carbs: Int!
    let fat: Int!
    let sodium: Int!
    let date: NSDate!
}
class GoalsTableViewController: UITableViewController {

    var goals = [nutrition]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        goals = [nutrition(calories: 140,
                           protein: 2,
                           carbs: 16,
                           fat: 8,
                           sodium: 210,
                           date: NSDate())]
        
        self.view.backgroundColor = UIColor(patternImage: UIImage(named: "wood")!)
   
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return goals.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = Bundle.main.loadNibNamed("TableViewCell", owner: self, options: nil)?.first as! TableViewCell
        cell.backgroundColor = UIColor.clear
        return cell
    }
    
}
