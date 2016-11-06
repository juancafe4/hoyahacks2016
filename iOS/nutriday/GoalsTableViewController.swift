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
    let date: String!
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
                           date: "Today"),
            nutrition(calories: 5,
            protein: 1,
            carbs: 3,
            fat: 0,
            sodium: 80,
            date: "Yesterday"),
            nutrition(calories: 90,
            protein: 10,
            carbs: 5,
            fat: 3,
            sodium: 60,
            date: "11/03/2016"),
            nutrition(
                calories: 90,
                protein: 1,
                carbs: 18,
                fat: 3,
                sodium: 80,
                date: "11/02/2016"
            ),
            nutrition(
                calories: 140,
                protein: 2,
                carbs: 16,
                fat: 8,
                sodium: 210,
                date: "11/01/2016"
            )]
        
        self.view.backgroundColor = UIColor(patternImage: UIImage(named: "wood")!)
   
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return goals.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = Bundle.main.loadNibNamed("TableViewCell", owner: self, options: nil)?.first as! TableViewCell
        cell.backgroundColor = UIColor.clear
        cell.dateLabel.text = goals[indexPath.row].date
        cell.dateLabel.font = UIFont(name: cell.dateLabel.font.fontName, size: 36)
       cell.cont.layer.borderWidth = 4
       cell.cont.layer.borderColor = UIColor(red:0, green:0, blue:0, alpha: 1.0).cgColor
        let calories = goals[indexPath.row].calories.description
        cell.calories.text = "Calories " + calories
        
        let protein = goals[indexPath.row].protein.description
        cell.protein.text = "Protein: " + protein + "gr"
        
        let fat = goals[indexPath.row].fat.description
        cell.fat.text = "Fat: " + fat + "gr"
        
        let carbs = goals[indexPath.row].carbs.description
        cell.carbs.text = "Carbs: " + carbs + "gr"
        
        let sodium = goals[indexPath.row].sodium.description
        cell.sodium.text = "Sodium: " + sodium + "mg"
        return cell
        
    }
    
    override func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 375
    }
}
